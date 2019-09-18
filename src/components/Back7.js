import React from "react";
import './Back7.css';
import { Container, Row } from 'react-bootstrap';
import titulo from '../images/desktop/titular3.svg';

const Back7 = () => (
  <Container fluid={true}>
    <Row id="b7">
      <img src={titulo} id="image7" />
      <h1 id="text7">
        La educación será una herramienta para aportar en la transformación de la ciudad: seguridad  y movilidad.
      </h1>
    </Row>
  </Container>
);

export default Back7;
