import React from "react";
import './Back9.css';
import { Container, Row, Card } from 'react-bootstrap';
import titulo from '../images/desktop/BOTON DESCARGA-11.svg';
import plan from '../images/BROCHURE.pdf'
import email from '../images/desktop/email.svg';
import whatsapp from '../images/desktop/whatsapp.svg';
import facebook from '../images/desktop/facebook.svg';
import tw from '../images/desktop/tw.svg';
import instagram from '../images/desktop/instagram.svg';

const Back9 = () => (
  <Container fluid={true}>
    <Row id="b9">
      <h1 id="text9">
        PLAN DE GOBIERNO
      </h1>
      <a href={plan} id="image" target="_blank">
        <img src={titulo} />
      </a>
    </Row>
    <Card.Footer>
      <a href="mailto:concejobogota@criollosomostodos.co?subject=ContactoWeb"
        id="image"
        target="_blank">
        <img src={email} id="imageFoot"/>
        concejobogota@criollosomostodos.co
      </a>
      <a href="https://wpme.link/GztO"
        id="image"
        target="_blank">
        <img src={whatsapp} id="imageFoot"/>
        3054149114
      </a>
      <a href="https://www.facebook.com/CriolloSomos/"
        id="image"
        target="_blank">
        <img src={facebook} id="imageFoot"/>
      </a>
      <a href="https://www.instagram.com/rafaelcriollo/?igshid=1i46j41m8ai9n&fbclid=IwAR0umomWWsp7GBt-vGd0DWVy7ZNc7F8PxNNT1j1GlTph4OzHoq3Sr1jE7q8"
        id="image"
        target="_blank">
        <img src={instagram} id="imageFoot"/>
      </a>
      <a href="https://twitter.com/RafaelCriolloP"
        id="image"
        target="_blank">
        <img src={tw} id="imageFoot"/>
      </a>
    </Card.Footer>
  </Container>
);

export default Back9;
