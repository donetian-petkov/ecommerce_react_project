import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderMenu() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        src="/img/logo.jpg"
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Shop</Nav.Link>
                        <Nav.Link href="#action2">Featured</Nav.Link>
                        <Nav.Link href="#action2">Recommended</Nav.Link>
                    </Nav>
                    <Nav>
                        <Form className="d-flex my-2 mx-2" size="sm">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                        <Nav.Link className="px-sm-2" href="/login">
                            <Button variant="primary">Login</Button>
                        </Nav.Link>

                        <Nav.Link className="px-sm-0" href="/register">
                            <Button variant="secondary">Register</Button>
                        </Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderMenu;