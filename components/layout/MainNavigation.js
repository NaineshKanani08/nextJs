import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Navbar, Nav, Container } from "react-bootstrap";
const MainNavigation = () => {
  const {push,asPath} = useRouter();
  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    console.log('data.url :>> ', data.url);
    push(data.url);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {status === "authenticated" ? (
              <>
                <Nav.Link>
                  <Link href="/">
                    <span>Home</span>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link href="/dashboard-swr">
                    <span>dashboard-swr</span>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link href="/new-meetup">
                    <span>new-meetup</span>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link href="/api/auth/signout">
                    <span onClick={handleSignOut}>signOut</span>
                  </Link>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link>
                <Link href={`/auth/signin?callbackUrl=${asPath}`}>
                  <span>SignIn</span>
                </Link>
                {/* <span onClick={signIn}>SignIn</span> */}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;

{
  /* <Navbar bg="dark" variant="dark">
<Container>
  <Navbar.Brand>MyApp</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link><Link href="/"><span>Home</span></Link></Nav.Link>
    <Nav.Link><Link href="/dashboard-swr"><span>dashboard-swr</span></Link></Nav.Link>
    <Nav.Link ><Link href="/new-meetup"><span>new-meetup</span></Link></Nav.Link>
  </Nav>
</Container>
</Navbar> */
}
