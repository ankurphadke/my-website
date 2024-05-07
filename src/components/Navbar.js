import { Nav, Navbar } from 'react-bootstrap';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

function CompNavbar() {
  return (
    <Navbar className="Navbar">
      <Nav>
        <Nav.Link className="NavLinkName" href="/home">Ankur Phadke</Nav.Link>
        <Nav.Link className="NavLink" href="/work">Work</Nav.Link>
        <Nav.Link className="NavLink" href="/school">School</Nav.Link>
        <Nav.Link className="NavLink" href="/music">Music</Nav.Link>
        <Nav.Link className="NavLink" href="/interests">Interests</Nav.Link>
        <Nav.Link className="NavLink" href="/resume">Resume</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CompNavbar;
