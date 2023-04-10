import { useState, useEffect, createContext } from "react";

export const globalContext = createContext()

export function ContextProvider({ children }) {

    const [data, setData] = useState(false);

    useEffect(() => {
        async function getWords() {
            const resp = await fetch('http://itgirlschool.justmakeit.ru/api/words')
            const words = await resp.json()
            setData(words)
        }
        getWords()
    }, [])

    const value = { data, setData }

    if (!data) {
        return <h1>Подождите, идет загрузка...</h1>
    }

    return (
        <globalContext.Provider value={value}>
            {children}
        </globalContext.Provider>
    )
}