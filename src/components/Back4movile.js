import React from "react";
import './Back4mobile.css';
import { Container, Row } from 'react-bootstrap';
import titulo from '../images/desktop/titular.svg';

const Back4movile = () => (
  <Container fluid={true}>
    <Row id="b4m">
      <img src={titulo} id="imagem" />
      <h1 id="textm">
        La implementación de la enseñanza de Historia bíblica en  los colegios públicos, desde la perspectiva literaria será una herramienta para la formación intelectual, cultural  y ética.
      </h1>
    </Row>
  </Container>
);

export default Back4movile;
