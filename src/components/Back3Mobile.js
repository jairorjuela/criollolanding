import React from "react";
import './Back3Mobile.css';
import { Container, Row, Image } from 'react-bootstrap';
import banner3 from '../images/movil/SECCION-3.png';

const Back3Mobile = () => (
  <Container fluid={true}>
    <Row>
      <Image
        id="b3m"
        src={banner3}
        alt="CriolloSomosTodos"
        fluid
      />
    </Row>
  </Container>
);

export default Back3Mobile;
