import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

function NavScrollExample() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container>
            <Navbar.Brand href="#" className='brand'>E-commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Shop</Nav.Link>
                    <Nav.Link href="#action3">Kids</Nav.Link>
                    <Nav.Link href="#action4">Women</Nav.Link>
                    <Nav.Link href="#action5">Men</Nav.Link>
                    <Nav.Link href="#action6">About</Nav.Link>
                    <Nav.Link href="#action7">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavScrollExample;