import { useState, useContext } from "react";
import { globalContext } from "../../Context/MyContext";
import CSSModules from "react-css-modules";
import style from "./style.module.scss";

function WordInput() {
    const { addWords } = useContext(globalContext);
    const [state, setState] = useState({});
    const initialState = {
        english: "",
        transcription: "",
        russian: "",
    };

    const handleChangeInput = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
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
            setState(initialState);
        } else {
            alert("Пожалуйста, заполните все поля");
        }
    };

    return (
        <form onSubmit={onSubmit} styleName="form__word">
            <div styleName="input__field">
                <label htmlFor="english">English</label>
                <input type="text"
                    placeholder="Start typing..."
                    name="english"
                    value={state.english || ""}
                    onChange={handleChangeInput} />
            </div>
            <div styleName="input__field">
                <label htmlFor="transcription">Transcription</label>
                <input type="text"
                    placeholder="Start typing..."
                    name="transcription"
                    value={state.transcription || ""}
                    onChange={handleChangeInput} />
            </div>
            <div styleName="input__field">
                <label htmlFor="russian">Translation</label>
                <input type="text"
                    placeholder="Start typing..."
                    name="russian"
                    value={state.russian || ""}
                    onChange={handleChangeInput} />
            </div>
            <div styleName="button__wrapper">
                <button styleName="button__add" onClick={onSubmit}>Add</button>
            </div>
        </form>
    )
}

export default CSSModules(WordInput, style);
