import React from 'react'
import {useRouter} from 'next/router'
import { signIn,useSession } from 'next-auth/react'
import styles from '../../styles/Home.module.css'
import { Button } from 'react-bootstrap'
import {FaGithub,FaGoogle} from 'react-icons/fa'
import Head from 'next/head'
const Signin = () => {
    const router = useRouter()
    const {data:session,status}=useSession()
    if(status==='loading') return <h3>Checking Authentication...</h3>
    if(session){
        const {callbackUrl}=router.query
        console.log('router.qurey :>> ', callbackUrl);
        router.push('https://nextapp-eta.vercel.app/')
    }
    const providers=[
        {name:'github',icon:<FaGithub />},
        {name:'google',icon:<FaGoogle />}
    ]
    const handleOAuthSignIn=(provider)=>{
        return signIn(provider)
    }
  return (
      <div className={styles.container}>
          <Head>
        <title>SignIn</title>
        <meta name="description" content="SignIn to app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Button className="mt-3" onClick={()=>router.push('/')}>Back to Home</Button>
        <div>
            {providers.map(({name,icon})=>(
                <Button className="mt-3" variant="dark" onClick={()=>handleOAuthSignIn(name)} key={name} style={{display: 'block'}} >{icon} SIGN IN WITH {name.toUpperCase()}</Button>
            )
            )}
        </div>
    </div>
  )
}

export default Signin