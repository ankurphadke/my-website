import { Nav, Navbar } from 'react-bootstrap';

function CompNavbar() {
  return (
    <Navbar className="Navbar">
      <Nav>
        <Nav.Link className="NavLink" href="/about">Ankur Phadke</Nav.Link>
        <Nav.Link className="NavLink" href="/music">Music</Nav.Link>
        <Nav.Link className="NavLink" href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link className="NavLink" href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CompNavbar;
