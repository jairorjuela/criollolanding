import React from "react";
import './Back2.css';
import { Container, Row, Image } from 'react-bootstrap';
import banner2 from '../images/desktop/SECCION-2.png';

const Back2 = () => (
  <Container fluid={true}>
    <Row>
      <Image
        id="b2"
        src={banner2}
        alt="CriolloSomosTodos"
        fluid
      />
    </Row>
  </Container>
);

export default Back2;
