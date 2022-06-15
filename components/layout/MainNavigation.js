import Link from 'next/link'
import {Navbar,Nav,Container} from 'react-bootstrap'
const MainNavigation = () => {
  return (
<Navbar bg="dark" variant="dark">
<Container>
  <Navbar.Brand>MyApp</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link><Link href="/"><div>Home</div></Link></Nav.Link>
    <Nav.Link><Link href="/new-meetup"><div>new-meetup</div></Link></Nav.Link>
  </Nav>
</Container>
</Navbar>
  )
}

export default MainNavigation