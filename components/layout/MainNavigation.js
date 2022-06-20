import Link from 'next/link'
import {Navbar,Nav,Container} from 'react-bootstrap'
const MainNavigation = () => {
  return (


    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>MyApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
    <Nav.Link><Link href="/"><span>Home</span></Link></Nav.Link>
    <Nav.Link><Link href="/dashboard-swr"><span>dashboard-swr</span></Link></Nav.Link>
    <Nav.Link ><Link href="/new-meetup"><span>new-meetup</span></Link></Nav.Link>
  </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


  )
}

export default MainNavigation

{/* <Navbar bg="dark" variant="dark">
<Container>
  <Navbar.Brand>MyApp</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link><Link href="/"><span>Home</span></Link></Nav.Link>
    <Nav.Link><Link href="/dashboard-swr"><span>dashboard-swr</span></Link></Nav.Link>
    <Nav.Link ><Link href="/new-meetup"><span>new-meetup</span></Link></Nav.Link>
  </Nav>
</Container>
</Navbar> */}