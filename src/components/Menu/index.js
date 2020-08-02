import React from 'react';
import Logo from "../../assets/img/Logo.png";
import Button from "../../components/Button";
import "./styles.css";
import { Link } from "react-router-dom";

function Menu(){
  return(
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="AluraFlix" className="Logo"/>
      </Link>

      <Button as={Link} to="/cadastro/musica" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;