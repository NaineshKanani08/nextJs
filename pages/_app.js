import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout/Layout";
import { SessionProvider, useSession } from "next-auth/react";

function MyApp({ Component,pageProps:{session,...pageProps} }) {
  return (

    <SessionProvider session={session}>
      <Layout>
    {Component.auth ? (
      <Auth>
        <Component {...pageProps} />
      </Auth>
    ) : (
      <Component {...pageProps} />
      )}
      </Layout>
  </SessionProvider>
    
    // <SessionProvider session={session}>
    //   <Layout>
    //     <Component {...pageProps} />
    //   </Layout>
    // </SessionProvider>
  );
}

export default MyApp;


function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true })

  if (status === 'loading') {
    return <div>Loading...</div>
  }
  
  return children
}