import React from "react";
import logo from './../logo.svg';
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="center">
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo"/>
                        <span id="brand">
                        <strong>Curso</strong>React
                    </span>
                    </div>

                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/test">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/movies">Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Pagina 1</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Pagina 2</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;