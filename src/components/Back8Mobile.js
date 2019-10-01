import React from "react";
import './Back8Mobile.css';
import { Container, Row, Image } from 'react-bootstrap';
import banner1 from '../images/movil/SECCION-9.png';

const Back2 = () => (
  <Container fluid={true}>
    <Row>
      <Image
        id="b8m"
        src={banner1}
        alt="CriolloSomosTodos"
        fluid
      />
    </Row>
  </Container>
);

export default Back2;
