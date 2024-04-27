import './Navbar.css';
import { Nav, Navbar } from 'react-bootstrap';

function CompNavbar() {
  return (
    <Navbar className="Navbar">
      <h1 className="Name">Ankur Phadke</h1>
      <Nav id="basic-navbar-nav">
        <Nav.Link href="/about">About Me</Nav.Link>
        <Nav.Link href="/music">Music</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CompNavbar;
