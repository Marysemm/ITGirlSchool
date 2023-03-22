import CSSModules from 'react-css-modules';
import style from "./style.module.scss";

function PageError() {
    return (
        <div styleName='error__wrapper'>
            <div styleName="error__content">
                <h2>Ошибка 404</h2>
                <p>Такой страницы тут точно нет</p>
            </div>
        </div>
    )
}

export default CSSModules(PageError, style);