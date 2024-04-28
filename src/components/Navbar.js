import { Nav, Navbar } from 'react-bootstrap';

function CompNavbar() {
  return (
    <Navbar className="Navbar">
      <Nav id="basic-navbar-nav">
        <a className="Name">Ankur Phadke</a>
        <Nav.Link className="NavLink" href="/about">About Me</Nav.Link>
        <Nav.Link className="NavLink" href="/music">Music</Nav.Link>
        <Nav.Link className="NavLink" href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link className="NavLink" href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CompNavbar;
