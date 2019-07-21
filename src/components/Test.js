import React, { Fragment, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Test.css';

export const Test = () => {
  return (
    <Fragment>
      <Navbar className="navbar">
        <Navbar.Brand href="#home" className="navbar-brand">
          CriolloSomosTodos
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Inicio
          </Navbar.Text>
          <Navbar.Text>
            Yo soy Criollo
          </Navbar.Text>
          <Navbar.Text>
            Contacto
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};
export default Test;
