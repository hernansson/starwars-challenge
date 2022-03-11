import { createContext, useState } from 'react'

export const HistoryContext = createContext()

function HistoryProvider({ children }) {
    const [barActive, setBarActive] = useState(false)
    const [barTitle, setBarTitle] = useState('People of Star Wars')

    return (
        <HistoryContext.Provider
            value={{ barActive, setBarActive, barTitle, setBarTitle }}
        >
            {children}
        </HistoryContext.Provider>
    )
}

export default HistoryProvider
