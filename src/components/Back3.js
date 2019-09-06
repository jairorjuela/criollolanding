import React from "react";
import './Back3.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import banner3 from '../images/banner3.png';

const Back3 = () => (
  <Container fluid={true}>
    <Row>
      <Col xs={12} id="b3">
        <Image
          src={banner3}
          alt="CriolloSomosTodos"
          fluid
        />
      </Col>
    </Row>
  </Container>
);

export default Back3;
