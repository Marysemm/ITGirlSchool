import React, { useState, useRef, useEffect } from "react";
import CSSModules from 'react-css-modules';
import style from "./style.module.scss";

function Word({ word, count, handleChange }) {
    const { english, transcription, russian } = word;

    const [checked, setCheked] = useState(false);

    const handleClick = () => {
        setCheked(!checked);
        handleChange();
    }

    return (
        <div styleName="card__wrapper">
            <h3 styleName="word">{english}</h3>
            <p styleName="word__transcription">{transcription}</p>
            {checked ? (
                <div styleName="word__checked">
                    <div styleName="word__translated">{russian}</div>
                </div>
            ) : (
                <button styleName="button__check" onClick={handleClick}>Проверить</button>
            )}
        </div>
    )
}

export default CSSModules(Word, style);