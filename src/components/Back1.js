import React from "react";
import './Back1.css';
import banner1 from '../images/banner1.png';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Back1 = () => (
    <Container fluid={true}>
      <Row>
        <Col xs={12} id="b1">
          <Image
            src={banner1}
            alt="CriolloSomosTodos"
            fluid
          />
        </Col>
      </Row>
    </Container>
);

export default Back1;
