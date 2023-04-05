import { Fragment, useEffect, useState } from "react";
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
    const [errorEnglish, setErrorEnglish] = useState(false);
    const [errorTranscription, setErrorTranscription] = useState(false);
    const [errorRussian, setErrorRussian] = useState(false);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (errorEnglish || errorTranscription || errorRussian) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [errorEnglish, errorTranscription, errorRussian])

    const handleEdit = () => {
        setEditForm(!editForm);
    }

    const checkValidation = () => {
        if (defaultRow.english === "") {
            setErrorEnglish(true);
        }
        if (defaultRow.transcription === "") {
            setErrorTranscription(true);
        }
        if (defaultRow.russian === "") {
            setErrorRussian(true);
        }
        if (defaultRow.english !== "" && defaultRow.transcription !== "" && defaultRow.russian !== "") {
            setEditForm(!editForm);
            console.log(props);
        }

    }

    const handleChange = (e) => {
        editDefaultRow({ ...defaultRow, [e.target.name]: e.target.value.toLowerCase() })

        if (e.target.value.match(/[0-9]/)) {
            alert("Пожалуйста, вводите только буквы")
        }

        if (defaultRow.english !== "") {
            setErrorEnglish(false);
        }
        if (defaultRow.transcription !== "") {
            setErrorTranscription(false);
        }
        if (defaultRow.russian !== "") {
            setErrorRussian(false);
        }
    }

    return (
        <Fragment>
            <tbody key={props.id} >
                <tr>
                    <td>
                        {
                            editForm ? (
                                <div>{props.english}</div>)
                                :
                                (
                                    <input type="text"
                                        name="english"
                                        styleName={errorEnglish ? "input__error" : "input__edit"}
                                        required="required"
                                        value={defaultRow.english}
                                        onChange={handleChange} />
                                )
                        }
                    </td>
                    <td>
                        {
                            editForm ? (
                                <div>{props.transcription}</div>
                            )
                                :
                                (
                                    <input type="text"
                                        name="transcription"
                                        styleName={errorTranscription ? "input__error" : "input__edit"}
                                        required="required"
                                        value={defaultRow.transcription}
                                        onChange={handleChange} />
                                )
                        }
                    </td>
                    <td>
                        {
                            editForm ? (
                                <div>{props.russian}</div>
                            )
                                :
                                (
                                    <input type="text"
                                        name="russian"
                                        styleName={errorRussian ? "input__error" : "input__edit"}
                                        required="required"
                                        value={defaultRow.russian}
                                        onChange={handleChange} />
                                )
                        }
                    </td>
                    <td>
                        {
                            editForm ? (
                                <button styleName="button__edit" onClick={handleEdit}>Edit</button>
                            )
                                :
                                (
                                    <button styleName="button__cancel" disabled={!formValid} onClick={checkValidation}>Save</button>
                                )
                        }
                        <button styleName="button__delete">Delete</button>
                    </td>
                </tr>
            </tbody>
        </Fragment>
    )
};
export default CSSModules(WordsRow, style);