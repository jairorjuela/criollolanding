import React from "react";
import './Back3.css';
import { Container, Row, Image } from 'react-bootstrap';
import banner3 from '../images/desktop/SECCION-3.png';

const Back3 = () => (
  <Container fluid={true}>
    <Row>
      <Image
        id="b3"
        src={banner3}
        alt="CriolloSomosTodos"
        fluid
      />
    </Row>
  </Container>
);

export default Back3;
