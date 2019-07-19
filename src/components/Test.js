import React, { Fragment, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Test.css';

export const Test = () => {
  return (
    <Fragment>
    <Navbar bg="dark" variant="dark" className="navbar">
      <Navbar.Brand href="#home" className="navbar-brand">
        CriolloSomosTodos
      </Navbar.Brand>
      <Nav>
        <Nav.Link className="navbar-link">More deets</Nav.Link>
        <Nav.Link className="navbar-link" eventKey={2}>
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar>
    </Fragment>
  );
};
export default Test;
