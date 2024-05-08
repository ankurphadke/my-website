import { Nav, Navbar } from 'react-bootstrap';
import Resume from 'public/resume.pdf'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

function CompNavbar() {
  return (
    <Navbar className="Navbar">
      <Nav>
        <Nav.Link className="NavLinkName" href="/home">Ankur Phadke</Nav.Link>
        <Nav.Link className="NavLink" href="/work">Work</Nav.Link>
        <Nav.Link className="NavLink" href="/school">School</Nav.Link>
        <Nav.Link className="NavLink" href="/interests">Interests</Nav.Link>
        <Nav.Link className="NavLink" href={ Resume } target="_blank">Resume</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CompNavbar;
