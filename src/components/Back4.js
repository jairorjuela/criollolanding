import React from "react";
import './Back4.css';
import { Container, Row } from 'react-bootstrap';
import titulo from '../images/desktop/titular.svg';

const Back4 = () => (
  <Container fluid={true}>
    <Row id="b4">
      <img src={titulo} id="image" />
      <h1 id="text">
        La implementación de la enseñanza de Historia bíblica en  los colegios públicos, desde la perspectiva literaria será una herramienta para la formación intelectual, cultural  y ética.
      </h1>
    </Row>
  </Container>
);

export default Back4;
