import React from "react";
import CSSModules from "react-css-modules";
import data from '../../../words.json';
import style from "./style.module.scss";

function Words(props) {
    return (
        <div styleName="word__cards">
            <table>
                <thead>
                    <tr>
                        <th>English</th>
                        <th>Transcription</th>
                        <th>Translation</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {data.map((words) => {
                    return (
                        <tbody key={words.id}>
                            <tr>
                                <td>{words.english}</td>
                                <td>{words.transcription}</td>
                                <td>{words.russian}</td>
                                <td>
                                    <button styleName="button__edit">Edit</button>
                                    <button styleName="button__delete">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}

export default CSSModules(Words, style);