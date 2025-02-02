import { useContext,useState } from "react"
import { AppContext } from "./Context/ContextProvider"
const Search =()=>{
    const {setUserInput } = useContext(AppContext)
    const [input,setInput] = useState('')
    const handleSubmit = ()=>{
        setUserInput(input)
    }
    return(
        <div className="search-bar">
            <input type="text" placeholder="Enter Your City" onChange={(e)=>setInput(e.target.value)} value={input}/>
            <button type="Submit" className="button" onClick={handleSubmit}>Check</button>
        </div>
    )
}

export default Search