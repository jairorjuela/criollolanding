import React from "react";
import './Back5.css';
import { Container, Row } from 'react-bootstrap';
import titulo from '../images/desktop/titular1.svg';

const Back5 = () => (
  <Container fluid={true}>
    <Row id="b5">
      <img src={titulo} id="image5" />
      <h1 id="text5">
        La labor social de la iglesia se visibilizará como aporte a la cultura de la Paz.
      </h1>
    </Row>
  </Container>
);

export default Back5;
