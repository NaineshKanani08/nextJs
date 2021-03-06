import { getSession } from "next-auth/react"

export default async function handler(req,res) {
  const session = await getSession({req})
  if(session){
      return res.send(session)
  }
  else{
      return res.send("Not Authenticated")
  }
}