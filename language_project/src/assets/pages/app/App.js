import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import React, { useState } from "react";
import { PageHome, PageGame, PageError } from '../index';
import CSSModules from 'react-css-modules';
import style from "./style.module.scss";
import IconTeacup from "./../../img/tea_cup_icon.png"

function App() {
  const [greetings, setGreetings] = useState(false);

  return (
    <div styleName="App">
      {greetings ? (
        <Router>
          <header styleName="header">
            <div styleName="header__logo">
              <NavLink to="/">
                <img src={IconTeacup}></img>
              </NavLink>
            </div>
            <ul styleName="header__nav">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/game">Game</NavLink>
              </li>
            </ul>
          </header>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/game" element={<PageGame />} />
            <Route path="*" element={<PageError />} />
          </Routes>
        </Router >
      ) : (
        <div styleName="greeting__wrapper">
          <div styleName="greeting__block">
            <h1 styleName="greeting__title">Hello there!</h1>
            <p styleName="greeting__text">Let's learn some new english words ✨</p>
            <button styleName="greeting__btn" onClick={() => (setGreetings(true))}><p>start now </p><img styleName="greeting__btn-img" src={IconTeacup}></img></button>
          </div>
        </div>
      )}
    </div >
  );
}

export default CSSModules(App, style);
