import CSSModules from "react-css-modules";
import style from "./style.module.scss";

function Loader() {
    return (
        <div styleName="loader__wrapper">
            <div styleName="lds-hourglass"></div>
        </div>
    )
}

export default CSSModules(Loader, style);