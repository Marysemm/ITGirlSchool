import { Fragment, useState } from "react";
import CSSModules from "react-css-modules";
import style from "./style.module.scss";

function WordsRow(props) {
    const [editForm, setEditForm] = useState(true)
    const [defaultRow, editDefaultRow] = useState({
        english: props.english,
        transcription: props.transcription,
        russian: props.russian,
        id: props.id,
    })

    const handleEdit = () => {
        setEditForm(!editForm);
    }

    const handleChange = (e) => {
        editDefaultRow({ ...defaultRow, [e.target.name]: e.target.value.toLowerCase() })
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
                                        name="english"
                                        required="required"
                                        value={defaultRow.english}
                                        onChange={handleChange} />
                                </td>
                                <td>
                                    <input type="text"
                                        name="transcription"
                                        required="required"
                                        value={defaultRow.transcription}
                                        onChange={handleChange} />
                                </td>
                                <td>
                                    <input type="text"
                                        name="russian"
                                        required="required"
                                        value={defaultRow.russian}
                                        onChange={handleChange} />
                                </td>
                                <td>
                                    <button styleName="button__cancel" onClick={handleEdit}>Cancel</button>
                                    <button styleName="button__delete">Delete</button>
                                </td>
                            </tr>
                        </tbody>)
            }
        </Fragment>
    )
}

export default CSSModules(WordsRow, style);