import { useState, useContext } from "react";
import { globalContext } from "../../Context/MyContext";
import CSSModules from "react-css-modules";
import style from "./style.module.scss";

function WordInput() {
    const { addWords } = useContext(globalContext);
    const [state, setState] = useState();

    const handleChangeInput = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });

        if (event.target.value === "") {
            alert("Пожалуйста, заполните все поля");
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (
            state.english !== "" &&
            state.transcription !== "" &&
            state.russian !== "" &&
            state.tags !== ""
        ) {
            addWords(state);
            setState();
        }
    };

    return (
        <form onSubmit={onSubmit} styleName="form__word">
            <input type="text"
                placeholder="English"
                name="english"
                onChange={handleChangeInput} />
            <input type="text"
                placeholder="Transcription"
                name="transcription"
                onChange={handleChangeInput} />
            <input type="text"
                placeholder="Russian"
                name="russian"
                onChange={handleChangeInput} />
            <div>
                <button styleName="button__add" onClick={onSubmit}>Add</button>
                {/* <button styleName="button__edit" onClick={clearInputs}>Clear</button> */}
            </div>
        </form>
    )
}

export default CSSModules(WordInput, style);
