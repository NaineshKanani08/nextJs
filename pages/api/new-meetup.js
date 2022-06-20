import {MongoClient} from 'mongodb'

async function handler(req, res) {
    if(req.method === 'POST'){
        const data=req.body;   
    const client= await MongoClient.connect(process.env.API_KEY)
    const db= client.db()

    const meetupsColletion=db.collection('meetups')
    const result= await meetupsColletion.insertOne(data)
    console.log('result :>> ', result);
    client.close()
    res.status(201).json({message:'Meetup Inserted Successfully'})
    }
  }
  export default handler