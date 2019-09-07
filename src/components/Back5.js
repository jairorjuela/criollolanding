import React from "react";
import './Back5.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import campo from '../images/campo.jpeg';

const Back5 = () => (
  <Container fluid={true}>
    <Row>
      <Col xs={12} id="b5">
        <Image
          id="campo"
          src={campo}
          alt="CriolloSomosTodos"
          thumbnail
        />
      </Col>
    </Row>
  </Container>
);

export default Back5;
