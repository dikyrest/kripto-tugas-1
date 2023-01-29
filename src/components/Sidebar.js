import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1 className="logo">Cipher Mania</h1>
            <ul className="nav">
                <NavLink to="/vigenere-cipher" activeclassname="active">
                    Vigenere Cipher
                </NavLink>
                <NavLink to="/autokey-vigenere-cipher" activeclassname="active">
                    Auto-Key Vigenere Cipher
                </NavLink>
                <NavLink to="/extended-vigenere-cipher" activeclassname="active">
                    Extended Vigenere Cipher
                </NavLink>
                <NavLink to="/affine-cipher" activeclassname="active">
                    Affine Cipher
                </NavLink>
                <NavLink to="/playfair-cipher" activeclassname="active">
                    Playfair Cipher
                </NavLink>
                <NavLink to="/hill-cipher" activeclassname="active">
                    Hill Cipher
                </NavLink>
            </ul>
        </div>
    );
}

export default Sidebar;