import React from "react";
import CSSModules from 'react-css-modules';
import Word from '../Word/Word';
import data from '../../../words.json';
import style from "./style.module.scss";

function WordCollection() {
    return (
        <div styleName="word__card">
            {
                data.map((words) =>
                    <Word
                        key={words.id}
                        english={words.english}
                        transcription={words.transcription}
                        russian={words.russian}
                    />
                )
            }
        </div>
    )
}

export default CSSModules(WordCollection, style);