import React, { useState } from "react";
import CSSModules from 'react-css-modules';
import style from "./style.module.scss";

function Word(props) {
    const [checked, setCheked] = useState(false);

    const handleChange = () => {
        setCheked(!checked);
    }
    return (
        <div styleName="card__wrapper">
            <h3 styleName="word">{props.english}</h3>
            <p styleName="word__transcription">{props.transcription}</p>
            {checked ? (
                <div styleName="word__checked">
                    <div styleName="word__translated">{props.russian}</div>
                </div>
            ) : (
                <button styleName="button__check" onClick={handleChange}>Проверить</button>
            )}
        </div>
    )
}

export default CSSModules(Word, style);