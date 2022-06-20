// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {MongoClient} from 'mongodb'

export default async function handler(req, res) {
  const client= await MongoClient.connect(process.env.API_KEY)
    const db= client.db()
    const meetupsColletion=db.collection('meetups')
    const result= await meetupsColletion.find().toArray()
    console.log('result :>> ', result);
    client.close()
    res.status(201).json({data:result})
}
