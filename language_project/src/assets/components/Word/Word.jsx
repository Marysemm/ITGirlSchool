import React, { useState } from "react";
import CSSModules from 'react-css-modules';
import style from "./style.module.scss";

function Word({ word }, count) {
    const { english, transcription, russian } = word;

    const [checked, setCheked] = useState(false);

    const handleChange = () => {
        setCheked(!checked);
    }

    console.log(word);
    return (
        <div styleName="card__wrapper">
            <h3 styleName="word">{english}</h3>
            <p styleName="word__transcription">{transcription}</p>
            {checked ? (
                <div styleName="word__checked">
                    <div styleName="word__translated">{russian}</div>
                </div>
            ) : (
                <button styleName="button__check" onClick={handleChange}>Проверить</button>
            )}
        </div>
    )
}

export default CSSModules(Word, style);