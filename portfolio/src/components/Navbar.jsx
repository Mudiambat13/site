import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className="fw-bold text-primary">Jonathan</span>
          <span className="text-light">Code</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/skills">Compétences</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar