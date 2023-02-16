
import CSSModules from "react-css-modules";
import WordsRow from "../WordsRow/WordsRow";
import data from '../../../words.json';
import style from "./style.module.scss";

function Words() {
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
                        <WordsRow
                            key={words.id}
                            english={words.english}
                            transcription={words.transcription}
                            russian={words.russian}
                        />
                    )
                })}
            </table>
        </div>
    )
}

export default CSSModules(Words, style);