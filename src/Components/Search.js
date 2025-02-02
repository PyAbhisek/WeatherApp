import { useContext,useState } from "react"
import { AppContext } from "./Context/ContextProvider"
const Search =()=>{
    const {setUserInput } = useContext(AppContext)
    const [input,setInput] = useState('')
    const handleSubmit = ()=>{
        setUserInput(input)
        localStorage.setItem('city',input)
    }
    return(
        <div>
            <input type="text" placeholder="Enter Your City" onChange={(e)=>setInput(e.target.value)}/>
            <button type="Submit" onClick={handleSubmit}>Check</button>
        </div>
    )
}

export default Search