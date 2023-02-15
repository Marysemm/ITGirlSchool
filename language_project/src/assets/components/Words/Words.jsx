import React from "react";
import CSSModules from 'react-css-modules';
import style from "./style.module.scss";

function Words(props) {
    return (
        <div styleName="word__cards">
            <div styleName="englishWord">{props.english}</div>
            <div styleName="englishTranscription">{props.transcription}</div>
            <div styleName="englishTranslation">{props.russian}</div>
        </div>
    )
}

export default CSSModules(Words, style);