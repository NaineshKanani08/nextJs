import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";
const MeetupDetails = ({ meetupData }) => {
  const router = useRouter();
  const { meetupid } = router.query;
  return (
    <div>
      <Head>
        <title>{meetupData.title}</title>
        <meta
          name="description"
          content={meetupData.description}
        />
      </Head>
      <MeetupDetail meetupData={meetupData} />
    </div>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.API_KEY);
  const db = client.db();
  const meetupsColletion = db.collection("meetups");
  const result = await meetupsColletion.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: "blocking",
    paths: result.map((value) => ({
      params: { meetupid: value._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupid;

  const client = await MongoClient.connect(process.env.API_KEY);
  const db = client.db();
  const meetupsColletion = db.collection("meetups");
  const selctedMeetup = await meetupsColletion.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: {
        title: selctedMeetup.title,
        address: selctedMeetup.address,
        image: selctedMeetup.url,
        id: selctedMeetup._id.toString(),
        description: selctedMeetup.description,
      },
    },
    revalidate: 1,
  };
}
export default MeetupDetails;
