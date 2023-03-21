import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import { PageHome, PageGame, PageError } from '../index';
import CSSModules from 'react-css-modules';
import style from "./style.module.scss";

function App() {
  return (
    <div styleName="App">
      <Router>
        <header styleName="header">
          <div styleName="header__logo">
            <NavLink to="/">WordsGame</NavLink>
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
    </div >
  );
}

export default CSSModules(App, style);
