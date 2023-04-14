import { useState, useEffect, createContext } from "react";
import Loader from "../components/Loader/Loader";

export const globalContext = createContext()

export function ContextProvider({ children }) {

    const [words, setWords] = useState([]);
    const [data, setData] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        getWords()
    }, [])

    const getWords = () => {
        fetch('http://itgirlschool.justmakeit.ru/api/words')
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                throw (console.log("Error..."));
            })
            .then((resp) => {
                setWords(resp);
            })
            .catch((errors) => setError(errors))
            .finally(() => {
                setData(true)
            })
    }

    const editWords = (word) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${word.id}/update/`, {
            method: 'POST',
            body: JSON.stringify(word),
        })
            .then(() => {
                getWords();
            })
            .catch((errors) => setError(errors),
                console.log("Ошибка при редактировании слова"));
    };

    const addWords = (word) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/add`, {
            method: 'POST',
            body: JSON.stringify(word),
        })
            .then(() => {
                getWords();
            })
            .catch((errors) => setError(errors),
                console.log("Ошибка при добавлении нового слова"));
    };

    const deleteWords = (id) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete/`, {
            method: 'POST',
        })
            .then(() => {
                getWords();
            })
            .catch((errors) => setError(errors),
                console.log("Ошибка при удалении слова"));
    }

    if (!data) {
        return <Loader />
    }

    if (error) {
        return console.log("Ошибка");
    }

    return (
        <globalContext.Provider value={{ words, data, error, editWords, addWords, deleteWords }}>
            {children}
        </globalContext.Provider>
    )
}
