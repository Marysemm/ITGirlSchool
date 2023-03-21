import CSSModules from 'react-css-modules';
import style from "./style.module.scss";

function PageError() {
    return (
        <div styleName='error_wrapper'>
            <h2>Ошибка 404</h2>
            <p>Такой страницы тут точно нет</p>
        </div>
    )
}

export default CSSModules(PageError, style);