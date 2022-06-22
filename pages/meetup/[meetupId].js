import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";
import { useSession } from "next-auth/react";
export default function MeetupDetails({ meetupData }){
    const { data: session } = useSession()
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
      params: { meetupId: value._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

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

MeetupDetails.auth=true;
