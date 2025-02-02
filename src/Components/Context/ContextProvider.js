
import { createContext, useState } from 'react'

export const AppContext = createContext()
export const ContextProvider = ({ children }) => {
    const [userInput, setUserInput] = useState(localStorage.getItem("city") || 'Bengaluru')
    const [showError, setShowError] = useState(false)
    return (
        <AppContext.Provider value={{ userInput, setUserInput, showError, setShowError }}>
            {children}
        </AppContext.Provider>

    )
}
