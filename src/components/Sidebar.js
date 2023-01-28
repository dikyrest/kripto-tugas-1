import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1 className="logo">Cipher Mania</h1>
            <ul className="nav">
                <li className="nav-item">
                    <a href="/vigenere-cipher" className="nav-link">Vigenere Cipher</a>
                </li>
                <li className="nav-item">
                    <a href="/autokey-vigenere-cipher" className="nav-link">Auto Key Cipher</a>
                </li>
                <li className="nav-item">
                    <a href="/extended-vigenere-cipher" className="nav-link">Extended Vigenere Cipher</a>
                </li>
                <li className="nav-item">
                    <a href="/affine-cipher" className="nav-link">Affine Cipher</a>
                </li>
                <li className="nav-item">
                    <a href="/playfair-cipher" className="nav-link">Playfair Cipher</a>
                </li>
                <li className="nav-item">
                    <a href="/hill-cipher" className="nav-link">Hill Cipher</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;