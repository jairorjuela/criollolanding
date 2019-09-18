import React from "react";
import './Back1Mobile.css';
import { Container, Row, Image } from 'react-bootstrap';
import banner1 from '../images/movil/SECCION-1.png';

const Back1Mobile = () => (
  <Container fluid={true}>
    <Row>
      <Image
        id="b1m"
        src={banner1}
        alt="CriolloSomosTodos"
        fluid
      />
    </Row>
  </Container>
);

export default Back1Mobile;
