import { AppContext } from "./Context/ContextProvider"
import Display from "./Display"
import Search from "./Search"
import { useContext } from "react"
const Dashboard = () => {
    const {userInput} = useContext(AppContext)
    console.log(userInput,"user")
    return (
        <div className="">
            <div>
                <Display/>
            </div>

        </div>
    )
}
export default Dashboard