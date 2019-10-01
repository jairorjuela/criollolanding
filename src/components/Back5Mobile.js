import React from "react";
import './Back5Mobile.css';
import { Container, Row } from 'react-bootstrap';
import titulo from '../images/desktop/titular1.svg';

const Back5 = () => (
  <Container fluid={true}>
    <Row id="b5m">
      <img src={titulo} id="image5m" />
      <h1 id="text5m">
        La labor social de la iglesia se visibilizará como aporte a la cultura de la Paz.
      </h1>
    </Row>
  </Container>
);

export default Back5;
