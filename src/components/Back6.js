import React from "react";
import './Back6.css';
import { Container, Row } from 'react-bootstrap';
import titulo from '../images/desktop/titular2.svg';

const Back6 = () => (
  <Container fluid={true}>
    <Row id="b6">
      <img src={titulo} id="image" />
      <h1 id="text">
        La implementación de la tecnificación agrícola en la ruralidad Bogotana, generará empleo y fortalecerá la Seguridad Alimentaria.
      </h1>
    </Row>
  </Container>
);

export default Back6;
