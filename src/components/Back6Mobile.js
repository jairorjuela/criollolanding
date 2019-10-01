import React from "react";
import './Back6Mobile.css';
import { Container, Row } from 'react-bootstrap';
import titulo from '../images/desktop/titular2.svg';

const Back6 = () => (
  <Container fluid={true}>
    <Row id="b6m">
      <img src={titulo} id="image6m" />
      <h1 id="text6m">
        La implementación de la tecnificación agrícola en la ruralidad Bogotana, generará empleo y fortalecerá la Seguridad Alimentaria.
      </h1>
    </Row>
  </Container>
);

export default Back6;
