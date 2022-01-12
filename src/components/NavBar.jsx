import React from "react";
import { Navbar, Container, Nav} from 'react-bootstrap'
import CartWidget from "./CartWidget";

export default function NavBar (){
    return(
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Nombre</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#home">Productos</Nav.Link>
                    <Nav.Link href="#home">Contacto</Nav.Link>
                </Nav>
            </Container>
            <CartWidget count="0"/>
        </Navbar>
        </>
    )
}