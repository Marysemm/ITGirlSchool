
import CSSModules from "react-css-modules";
import WordsRow from "../WordsRow/WordsRow";
import style from "./style.module.scss";
import { globalContext } from "../../Context/MyContext";
import { useContext } from "react";

function Words() {
    const { data, setData } = useContext(globalContext)

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