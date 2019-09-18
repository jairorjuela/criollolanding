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
      <a href="" id="image9m" target="_blank">
        <img src={titulo} />
      </a>
    </Row>
    <Card.Footer id="footm">
      <div id="redesm">
      <a href="mailto:concejobogota@criollosomostodos.co?subject=ContactoWeb"
        id="image9m"
        target="_blank">
        <img src={email} id="imageFoot"/>
        concejobogota@criollosomostodos.co
      </a>
      <a href="https://wpme.link/GztO"
        id="image9m"
        target="_blank">
        <img src={whatsapp} id="imageFoot"/>
        3054149114
      </a>
      </div>
      <div id="redesm">
      <a href="https://www.facebook.com/CriolloSomos/"
        id="image9m"
        target="_blank">
        <img src={facebook} id="imageFootm"/>
      </a>
      <a href="https://www.instagram.com/rafaelcriollo/?igshid=1i46j41m8ai9n&fbclid=IwAR0umomWWsp7GBt-vGd0DWVy7ZNc7F8PxNNT1j1GlTph4OzHoq3Sr1jE7q8"
        id="image9m"
        target="_blank">
        <img src={instagram} id="imageFootm"/>
      </a>
      <a href="https://twitter.com/RafaelCriolloP"
        id="image9m"
        target="_blank">
        <img src={tw} id="imageFootm"/>
      </a>
      </div>
    </Card.Footer>
  </Container>
);

export default Back9Mobile;
