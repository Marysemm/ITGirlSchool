import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import CSSModules from 'react-css-modules';
import style from "./style.module.scss";

function Header() {
    return (
        <Router>
            <header styleName="header">
                <div styleName="header__logo">
                    <a href="#">WordsGame</a>
                </div>
                <ul styleName="header__nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Words</Link>
                    </li>
                    <li>
                        <Link to="/">Game</Link>
                    </li>
                </ul>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Words" element={<Words />} />
                <Route path="/Game" element={<Game />} />
            </Routes>
        </Router >
    )
}

export default CSSModules(Header, style);