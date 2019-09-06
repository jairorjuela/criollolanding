import React from "react";
import './Back2.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import banner2 from '../images/banner2.png';

const Back2 = () => (
  <Container fluid={true}>
    <Row>
      <Col xs={12} id="b2">
        <Image
          src={banner2}
          alt="CriolloSomosTodos"
          fluid
        />
      </Col>
    </Row>
  </Container>
);

export default Back2;
