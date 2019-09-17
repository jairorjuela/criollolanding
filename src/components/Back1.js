import React from "react";
import './Back1.css';
import { Container, Row, Image } from 'react-bootstrap';
import banner1 from '../images/desktop/SECCION-1.png';

const Back2 = () => (
  <Container fluid={true}>
    <Row>
      <Image
        id="b1"
        src={banner1}
        alt="CriolloSomosTodos"
        fluid
      />
    </Row>
  </Container>
);

export default Back2;
