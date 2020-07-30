import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../asserts/imagens/Logo.png';
import './Menu.css';
import Button from '../Buttons';
//import ButtonLink from '../Componentes/ButtonLink';


function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="VitalPrime Logo"></img>
            </Link>
            <Button as={Link} className="ButtonLink" to="/Cadastro/Videos">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;