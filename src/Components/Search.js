import { useContext,useState } from "react"
import { AppContext } from "./Context/ContextProvider"
const Search =()=>{
    const { userInput, setUserInput } = useContext(AppContext)
    const [input,setInput] = useState('')
    return(
        <div>
            <input type="text" placeholder="Enter Your City" onChange={(e)=>setInput(e.target.value)}/>
            <button type="Submit" onClick={()=>setUserInput(input)}>Check</button>
        </div>
    )
}

export default Search