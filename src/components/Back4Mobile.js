import React from "react";
import './Back4Mobile.css';
import { Container, Row } from 'react-bootstrap';
import titulo from '../images/desktop/titular.svg';

const Back4Mobile = () => (
  <Container fluid={true}>
    <Row id="b4m">
      <img src={titulo} id="image4m" />
      <h1 id="text4m">
        La implementación de la enseñanza de Historia bíblica en  los colegios públicos, desde la perspectiva literaria será una herramienta para la formación intelectual, cultural  y ética.
      </h1>
    </Row>
  </Container>
);

export default Back4Mobile;
