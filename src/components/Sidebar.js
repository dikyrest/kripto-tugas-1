import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1 className="logo">Cipher Mania</h1>
            <ul className="nav">
                <NavLink to="/vigenere-cipher" activeClassName="active">
                    Vigenere Cipher
                </NavLink>
                <NavLink to="/autokey-vigenere-cipher" activeClassName="active">
                    Auto-Key Vigenere Cipher
                </NavLink>
                <NavLink to="/extended-vigenere-cipher" activeClassName="active">
                    Extended Vigenere Cipher
                </NavLink>
                <NavLink to="/affine-cipher" activeClassName="active">
                    Affine Cipher
                </NavLink>
                <NavLink to="/playfair-cipher" activeClassName="active">
                    Playfair Cipher
                </NavLink>
                <NavLink to="/hill-cipher" activeClassName="active">
                    Hill Cipher
                </NavLink>
            </ul>
        </div>
    );
}

export default Sidebar;