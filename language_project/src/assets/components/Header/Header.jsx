import React from "react";
import CSSModules from 'react-css-modules';
import style from "./style.module.scss";

function Header() {
    return (
        <header styleName="header">
            <div styleName="header__logo">
                <a href="#">WordsGame</a>
            </div>
            <ul styleName="header__nav">
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

export default CSSModules(Header, style);