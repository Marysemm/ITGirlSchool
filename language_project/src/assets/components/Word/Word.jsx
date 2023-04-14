import React, { useState, useRef, useEffect } from "react";
import CSSModules from 'react-css-modules';
import style from "./style.module.scss";

function Word({ word, getCountWord }) {
    const { english, transcription, russian } = word;
    const [checked, setCheked] = useState(false);

    //const isTranslated = translatedWords.includes(word);

    const ref = useRef();

    useEffect(() => {
        ref.current.focus();
    }, []);

    const handleClick = () => {
        setCheked(!checked);
        getCountWord();
    }

    //const handleTranslateButtonClick = () => {
    //    if (!isTranslated) {
    //        onTranslate(word);
    //    }
    //    setCheked(!checked);
    //    getCountWord();
    //};

    return (
        <div styleName="card__wrapper">
            <h3 styleName="word">{english}</h3>
            <p styleName="word__transcription">{transcription}</p>
            {isTranslated ? (
                <div styleName="word__checked">
                    <div styleName="word__translated">{russian}</div>
                </div>
            ) : (
                <button styleName="button__check" ref={ref} onClick={handleClick}>Проверить</button>
            )}
        </div>
    )
}

export default CSSModules(Word, style);