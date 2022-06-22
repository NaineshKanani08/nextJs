import Head from 'next/head'
import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import styles from '../../styles//Home.module.css'

const index = () => {
  // const enterFormData =async(data)=>{
  //     const res=await fetch('/api/new-meetup',{method:'POST',body:JSON.stringify(data),
  //       headers:{'Content-Type': 'application/json'}
  //     })
  //     const dataValue= await res.json()
  //     console.log('dataValue :>> ', dataValue);
  // }
  return (
    // <div><NewMeetupForm enterFormData={enterFormData} /></div>
    <div className={styles.container}> 
      <Head>
        <title>New Meetup Form</title>
        <meta name="description" content="Add your own Meetups create an amazing network." />
      </Head>
      <NewMeetupForm />
      </div>
  )
}
index.auth = true
export default index