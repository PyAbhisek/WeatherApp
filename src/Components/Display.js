import { useContext,useEffect, useState } from "react";
import { AppContext } from "./Context/ContextProvider";

const Display =()=>{
    const {userInput,setShowError}  = useContext(AppContext)
    const [data,setData] = useState({})
    const ApiKey = '8bcaec0c8cddc8f2d262ba7c606bf9a5'
    // temperature, humidity, wind speed, and weather conditions (
    const fetchWeather = async()=>{
        try{
            let res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=1&appid=${ApiKey}`)
            if(!res.ok)
            {
                setShowError(true)
            }
            let info = await res.json()
            let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${info[0].lat}&lon=${info[0].lon}&appid=${ApiKey}&units=metric`)
            let data = await weatherData.json()
            console.log(data)
            setData(data)
        }
        catch(err){
            console.log(err)
            setShowError(true)
        }
        
    }
    useEffect(()=>{
        fetchWeather()
    },[userInput])
    const getForecast =()=>{

    }
    return(
        <div>
            Display
        </div>
    )
}
export default Display