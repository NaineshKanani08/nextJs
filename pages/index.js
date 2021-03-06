import Head from 'next/head'
import {MongoClient} from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'
import styles from '../styles/Home.module.css'

function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Meetup App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MeetupList meetups={props.meetups}/>
    </div>
  )  
}

// export async function getServerSideProps(){
//   return {
//     props: {
//       meetups:dummy
//     },
//   }
//   }


export const getStaticProps=async()=>{

  const client= await MongoClient.connect(process.env.API_KEY)
    const db= client.db()
    const meetupsColletion=db.collection('meetups')
    const result= await meetupsColletion.find().toArray()
    return {
      props: {
        meetups:result.map((meetup) =>{
          return ({
          title:meetup.title,
          address:meetup.address,
          image:meetup.url,
          id:meetup._id.toString()
          })
        })
      },
      revalidate:1
    }

  // const res = await fetch('http://localhost:3000/api/meetup');
  // const data= await res.json();
  // console.log('data :>> ', data);
  //   return {
  //     props: {
  //       meetups:data.data
  //     },
  //     revalidate:1
  //   }
}
export default Home;