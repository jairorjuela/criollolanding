import React, { Fragment } from 'react';
import { Navbar, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './NavbarHome.css';
import logoBloque from '../images/logoBloque.svg';
import Home from "./Home";

export const NavbarHome = () => {
  return (
    <Fragment>
        <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
          <Col xs lg="4">
            <Navbar.Brand >
            <NavLink to="/" component={Home}>
              <img
                src={logoBloque}
                width="100%"
                height="100%"
                className="d-inline-block align-top"
                alt="CriolloSomosTodos"
              />
            </NavLink>
            </Navbar.Brand>
          </Col>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse className="justify-content-end">
            <Col xs="4" lg="8">
              <Navbar.Brand className="navbar-link">
                ¿Quién es Criollo?
              </Navbar.Brand>
              <Navbar.Brand href="#" className="navbar-link">
                Propuestas
              </Navbar.Brand>
              <Navbar.Brand href="#" className="navbar-link">
                Galeria
              </Navbar.Brand>
              <Navbar.Brand href="#" className="navbar-link">
                Contacto
              </Navbar.Brand>
            </Col>
          </Navbar.Collapse>
        </Navbar>
    </Fragment>
  );
};
export default NavbarHome;
