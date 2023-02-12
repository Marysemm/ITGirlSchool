import React from "react";
import './words.scss';

function Words(props) {
    return (
        <div className="word__cards">
            <div className="englishWord">{props.english}</div>
            <div className="englishTranscription">{props.transcription}</div>
            <div className="englishTranslation">{props.russian}</div>
        </div>
    )
}

export default Words;