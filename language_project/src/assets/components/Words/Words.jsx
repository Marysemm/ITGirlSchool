
import CSSModules from "react-css-modules";
import WordsRow from "../WordsRow/WordsRow";
import WordInput from "../WordInput/WordInput";
import style from "./style.module.scss";
import { globalContext } from "../../Context/MyContext";
import { useContext, useEffect, useState } from "react";

function Words() {
    const { words, deleteWords } = useContext(globalContext)
    const [wordList, setWordList] = useState(words)

    useEffect(() => {
        setWordList(words)
    }, [words]);

    const handleDeleteWord = (id) => {
        deleteWords(id);
    };

    return (
        <div styleName="word__cards">
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>English</th>
                            <th>Transcription</th>
                            <th>Translation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {wordList.map((word, index) => {
                        return (
                            <WordsRow
                                index={index}
                                key={word.id}
                                {...word}
                                handleDeleteWord={handleDeleteWord}
                            />
                        )
                    })}
                </table>
            </div>
            <div>
                <WordInput />
            </div>
        </div>
    )
}

export default CSSModules(Words, style);