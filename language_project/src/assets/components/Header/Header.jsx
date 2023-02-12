import React from "react";
import './header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="#">WordsGame</a>
            </div>
            <ul className="header__nav">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Words</a>
                </li>
                <li>
                    <a href="#">Game</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;