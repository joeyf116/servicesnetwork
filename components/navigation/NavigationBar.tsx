import React, { useState } from 'react';
import { Container, Navbar, Nav,  NavDropdown, Badge, Image } from 'react-bootstrap';
import { useUser } from '@auth0/nextjs-auth0';

const NavigationBar = () => {
    const [notification, setNotification] = useState<boolean>(true);
    const { user } = useUser();

    if(user) {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                
            <Navbar.Brand href="/">
                <Image src="/servicesBrandLogoAcronym.png" alt="logo" width={60} height={60} />
            </Navbar.Brand>
            <Navbar.Brand href="/">
                My Services Network
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Services</Nav.Link>
                </Nav>
                <Nav>
                    <Image className="rounded-circle" src={user.picture ? user.picture : undefined} alt="avatar" width={50} height={40} />
                    <NavDropdown title={user.name} id="basic-nav-dropdown" menuVariant="dark">
                        <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item as="button">Sign Out</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={() => setNotification(!notification)}>
                            Notifications {notification ? <Badge bg="danger">1</Badge> : null}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
    else {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">
                <Image src="/servicesBrandLogoAcronym.png" alt="logo" width={60} height={60} />
            </Navbar.Brand>
            <Navbar.Brand href="/">
                My Services Network
            </Navbar.Brand>
            </Container>
            </Navbar>
        )
    }
}

export default NavigationBar;