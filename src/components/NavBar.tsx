import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Dropdown from 'react-bootstrap/Dropdown';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Publications" id="NavBarPublicationsDropdown" menuVariant="dark">
              <NavDropdown.Item href="https://www.sosy-lab.org/research/btor2-cert/">
                Btor2-Cert: A Certifying Hardware-Verification Framework Using Software Analyzers
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://github.com/sirrenberg">Github</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/sirrenberg/">LinkedIn</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/sirrenberg/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;