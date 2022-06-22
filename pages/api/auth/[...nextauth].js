import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import GoogleAuthProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../database/connectDB"

export default NextAuth({
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleAuthProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
      ],
      pages:{
          signIn:'/auth/signin',
      },
      adapter: MongoDBAdapter(clientPromise),
      secret: process.env.NEXTAUTH_SECRET,
})