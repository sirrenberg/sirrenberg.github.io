import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import linkedin from '../assets/nav-bar-linkedin-icon.svg';
import github from '../assets/nav-bar-github-icon.svg';
import '../styles/NavBar.css';
import '../styles/Default.css';
import { useEffect, useState } from 'react';

function NavBar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {

      // should Navbar be dark or transparent?
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      //which section is currently active?
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.clientHeight;
        const offset = 150;
        if (window.scrollY + offset>= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          const id = section.getAttribute('id');
          const navLinks = document.querySelectorAll('.nav-link');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);


  return (
    <Navbar bg={scrolled ? "dark" : ""} variant="dark" expand="sm" fixed="top" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className='nav-collapsed'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Publications" id="NavBarPublicationsDropdown" menuVariant="dark">
              <NavDropdown.Item href="https://www.sosy-lab.org/research/btor2-cert/">
                Btor2-Cert: A Certifying Hardware-Verification Framework Using Software Analyzers
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://github.com/sirrenberg">
              <div className="nav-link-div">
                <img src={github} alt="Github" className="nav-link-img" />
                Github
              </div>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/sirrenberg/">
              <div className="nav-link-div">
                <img src={linkedin} alt="LinkedIn" className="nav-link-img" />
                LinkedIn
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;