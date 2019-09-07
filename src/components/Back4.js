import React from "react";
import './Back4.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import plandetrabajo from '../images/plandetrabajo.pdf'

const Back4 = () => (
  <Container fluid={true}>
    <Row>
      <Col xs={12} id="b4">
      <Button variant="warning" size="lg" block>
        <a href={plandetrabajo} download>Descarga mi plan de trabajo</a>
      </Button>
      </Col>
    </Row>
  </Container>
);

export default Back4;
