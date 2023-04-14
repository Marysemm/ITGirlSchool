import CSSModules from "react-css-modules";
import style from "./style.module.scss";

function Error() {
    return (
        <div styleName='error__wrapper'>
            <div styleName="error__content">
                <h2>Ошибка!</h2>
                <p>Что-то пошло не так...</p>
            </div>
        </div>
    )
}

export default CSSModules(Error, style);