import { Fragment, useState } from "react";
import CSSModules from "react-css-modules";
import style from "./style.module.scss";

function WordsRow(props) {
    const [editForm, setEditForm] = useState(true)
    const defaultRow = {
        english: props.english,
        transcription: props.transcription,
        russian: props.russian,
        id: props.id,
    }

    const handleEdit = () => {
        setEditForm(!editForm);
    }

    return (
        <Fragment>
            {
                editForm ? (
                    <tbody key={props.id} >
                        <tr>
                            <td>{props.english}</td>
                            <td>{props.transcription}</td>
                            <td>{props.russian}</td>
                            <td>
                                <button styleName="button__edit" onClick={handleEdit}>Edit</button>
                                <button styleName="button__delete">Delete</button>
                            </td>
                        </tr>
                    </tbody>)
                    :
                    (
                        <tbody key={props.id}>
                            <tr>
                                <td>
                                    <input type="text"
                                        name="englishWord"
                                        required="required"
                                        value={defaultRow.english}
                                        readOnly="readOnly" />
                                </td>
                                <td>
                                    <input type="text"
                                        name="transcriptionWord"
                                        required="required"
                                        value={defaultRow.transcription}
                                        readOnly="readOnly" />
                                </td>
                                <td>
                                    <input type="text"
                                        name="russianWord"
                                        required="required"
                                        value={defaultRow.russian}
                                        readOnly="readOnly" />
                                </td>
                                <td>
                                    <button styleName="button__edit" onClick={handleEdit}>Edit</button>
                                    <button styleName="button__delete">Delete</button>
                                </td>
                            </tr>
                        </tbody>)
            }
        </Fragment>
    )
}

export default CSSModules(WordsRow, style);