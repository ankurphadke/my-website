import './Navbar.css';

import { Nav, Navbar } from 'react-bootstrap'

function CompNavbar() {
  return (
    <Navbar>
        <Nav className="Navbar">
            <Nav.Link href="">About Me</Nav.Link>
            <Nav.Link href="">Music</Nav.Link>
        </Nav>
    </Navbar>
  )
}

export default CompNavbar;