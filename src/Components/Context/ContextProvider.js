
import {createContext,useState} from 'react'

export const AppContext = createContext()
export const ContextProvider = ({children}) =>{
    const [userInput,setUserInput] = useState(localStorage.getItem("city")|| 'Bengaluru')
    return(
        <AppContext.Provider value={{userInput,setUserInput}}>
            {children}
        </AppContext.Provider>

    )
}
