import React from "react";
import './Back9Mobile.css';
import { Container, Row, Card } from 'react-bootstrap';
import titulo from '../images/desktop/BOTON DESCARGA-11.svg';
import email from '../images/desktop/email.svg';
import whatsapp from '../images/desktop/whatsapp.svg';
import facebook from '../images/desktop/facebook.svg';
import tw from '../images/desktop/tw.svg';
import instagram from '../images/desktop/instagram.svg';

const Back9Mobile = () => (
  <Container fluid={true}>
    <Row id="b9m">
      <h1 id="text9m">
        PLAN DE TRABAJO
      </h1>
      <a href="" id="image91m" target="_blank">
        <img src={titulo} />
      </a>
    </Row>
    <Row id="footm">
    </Row>
    <Card.Footer>
    <Row>
        <a href="mailto:concejobogota@criollosomostodos.co?subject=ContactoWeb"
          target="_blank"
          id="email">
          <img src={email} id="emailImage"/>
          concejobogota@criollosomostodos.co
        </a>
    </Row>
      <Row>
        <a href="https://wpme.link/GztO"
          target="_blank"
          id="email">
          <img src={whatsapp} id="emailImage"/>
          3054149114
        </a>
      </Row>
         <a href="https://www.facebook.com/CriolloSomos/"
          target="_blank"
          id="email">
          <img src={facebook} id="emailImage"/>
        </a>
        <a href="https://www.instagram.com/rafaelcriollo/?igshid=1i46j41m8ai9n&fbclid=IwAR0umomWWsp7GBt-vGd0DWVy7ZNc7F8PxNNT1j1GlTph4OzHoq3Sr1jE7q8"
          target="_blank">
          <img src={instagram} id="emailImage"/>
        </a>
        <a href="https://twitter.com/RafaelCriolloP"
          target="_blank"
          id="email">
          <img src={tw} id="emailImage"/>
        </a>
    </Card.Footer>
  </Container>
);

export default Back9Mobile;
