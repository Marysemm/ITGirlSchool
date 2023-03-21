import React, { useState } from "react";
import CSSModules from 'react-css-modules';
import Word from '../Word/Word';
import data from '../../../words.json';
import style from "./style.module.scss";

function WordCollection() {
    const [count, setCount] = useState(0)

    function handlePrev() {
        {
            if (count > 0) {
                setCount((count - 1) % data.length)
            } else {
                setCount(data.length - 1)
            }
        }
    }

    function handleNext() {
        setCount((count + 1) % data.length)
    }

    return (
        <div styleName="card__wrapper" key={count}>
            <button styleName="card__btn" onClick={handlePrev}>Previous word</button>
            <div styleName="word__card">
                <Word
                    word={data[count]}
                />
            </div>
            <button styleName="card__btn" onClick={handleNext}>Next word</button>
        </div>
    )
}

export default CSSModules(WordCollection, style);