import { Nav, Navbar } from 'react-bootstrap';

function CompFooter() {
  return (
    <Navbar className="Navbar">
      <Nav id="basic-navbar-nav">
        <Nav.Link className="NavLink" href="/about">Contact</Nav.Link>
        <Nav.Link className="NavLink" href="/music">Music</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CompFooter;
