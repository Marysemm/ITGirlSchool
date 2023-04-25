import { Fragment, useEffect, useState, useContext } from "react";
import { globalContext } from "../../Context/MyContext";
import CSSModules from "react-css-modules";
import style from "./style.module.scss";

function WordsRow(props) {
    const [editForm, setEditForm] = useState(true)
    const [defaultRow, setDefaultRow] = useState(0)
    const [errorEnglish, setErrorEnglish] = useState(false);
    const [errorTranscription, setErrorTranscription] = useState(false);
    const [errorRussian, setErrorRussian] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const { editWords } = useContext(globalContext);

    useEffect(() => {
        if (errorEnglish || errorTranscription || errorRussian) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [errorEnglish, errorTranscription, errorRussian])

    useEffect(() => {
        setDefaultRow(props)
    }, [])

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
    }

    const handleChangeSave = (e) => {
        e.preventDefault();
        checkValidation();
        if (defaultRow.english !== "" && defaultRow.transcription !== "" && defaultRow.russian !== "" && defaultRow.tags !== "") {
            setEditForm(!editForm);
        }
        editWords(defaultRow);
    };

    const handleChange = (e) => {
        setDefaultRow({ ...defaultRow, [e.target.name]: e.target.value.toLowerCase() })

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
        checkValidation();
    }

    const onDelete = () => {
        props.handleDeleteWord(props.id);
    };

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
                                    <div>
                                        <button styleName="button__edit" onClick={handleEdit}>Cancel</button>
                                        <button styleName="button__cancel" disabled={!formValid} onClick={handleChangeSave}>Save</button>
                                    </div>
                                )
                        }
                        <button styleName="button__delete" onClick={onDelete}>Delete</button>
                    </td>
                </tr>
            </tbody>
        </Fragment>
    )
};
export default CSSModules(WordsRow, style);