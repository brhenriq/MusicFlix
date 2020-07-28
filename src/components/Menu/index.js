import React from 'react';
import Logo from "../../assets/img/Logo.png";
import Button from "../../components/Button";
import "./styles.css";

function Menu(){
  return(
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="AluraFlix" className="Logo"/>
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Nova música
      </Button>
    </nav>
  );
}

export default Menu;