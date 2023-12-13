import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
        <h2>Logo</h2>
            <ul>
                <li>
                    <Link to="/soluciones">Soluciones</Link>
                </li>
                <li>
                    <Link to="/">Contacto</Link>
                </li>
                <li>
                    <Link to="/">test</Link>
                </li>
                <li>
                    <Link to="/">test</Link>
                </li>
            </ul>
        </nav>
    );
};


export default Navbar;

