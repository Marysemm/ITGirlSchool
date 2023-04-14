import React, { useState } from "react";
import CSSModules from 'react-css-modules';
import Word from '../Word/Word';
import data from '../../../words.json';
import style from "./style.module.scss";

function WordCollection() {
    const [count, setCount] = useState(0)
    const [countWord, setCountWord] = useState(0)

    //    const [translatedWords, setTranslatedWords] = useState([]);

    //    const handleTranslate = (word) => {
    //       setTranslatedWords([...translatedWords, word]);
    //    };

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

    function getCountWord() {
        setCountWord(countWord + 1);
    }

    return (
        <>
            <p styleName="card__count">Проверено {countWord} слов</p>
            <div styleName="card__wrapper" key={count}>
                <button styleName="card__btn" onClick={handlePrev}>Previous word</button>
                <div styleName="word__card">
                    <Word
                        word={data[count]}
                        count={countWord}
                        getCountWord={getCountWord}
                    //translatedWords={translatedWords}
                    //onTranslate={handleTranslate}
                    />
                </div>
                <button styleName="card__btn" onClick={handleNext}>Next word</button>
            </div>
        </>
    )
}

export default CSSModules(WordCollection, style);