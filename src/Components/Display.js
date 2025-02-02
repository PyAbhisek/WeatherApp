import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context/ContextProvider";
import Errors from "./Errors";
import background from '../Assests/background.jpg'
import Search from "./Search";

const Display = () => {
    const { userInput, setShowError, showError } = useContext(AppContext);
    const [data, setData] = useState({});
    const ApiKey = '8bcaec0c8cddc8f2d262ba7c606bf9a5';

    const fetchWeather = async () => {
        try {
            let res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=1&appid=${ApiKey}`);
            let info = await res.json();
            const weatherData = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${info[0].lat}&lon=${info[0].lon}&appid=${ApiKey}&units=metric`
            );
            localStorage.setItem('city', userInput);

            let data = await weatherData.json();
            setData(data);
        } catch (err) {
            console.log(err);
            setShowError(true);
        }
    };

    useEffect(() => {
        fetchWeather();
        const intervalId = setInterval(() => {
            fetchWeather();
        }, 30000);
        return () => clearInterval(intervalId);
    }, [userInput]);

    const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };
    
    return (
        <div className="weather-container">

            <div className="background" style={{ backgroundImage: `url(${background})` }}>
                <div className="weather-info">
                    <h1>{formatDate(new Date())}</h1>
                    {data?.list && data.list.length > 0 && (
                        <>
                            <div className="current-weather">
                                <h2>Current Weather</h2>
                                <div className="weather-detail">
                                    <div className="weather-icon">
                                        <img
                                            src={`https://openweathermap.org/img/wn/${data.list[0]?.weather[0]?.icon}.png`}
                                            alt={data.list[0]?.weather[0]?.description}
                                        />
                                    </div>
                                    <div className="temperature">
                                        <p>{data.list[0]?.main?.temp}°C</p>
                                    </div>
                                    <div className="weather-description">
                                        <p>{data.list[0]?.weather[0]?.description}</p>
                                    </div>
                                </div>
                                <div className="weather-stats">
                                    <p>Humidity: {data.list[0]?.main?.humidity}%</p>
                                    <p>Wind Speed: {data.list[0]?.wind?.speed} m/s</p>
                                </div>
                            </div>

                            <div className="forecast">
                                <h2>Next 5 Days Forecast</h2>
                                <div className="forecast-items">
                                    {data.list.slice(0, 5).map((item, index) => (
                                        <div key={index} className="forecast-item">
                                            <p>{formatDate(item.dt * 1000)}</p>
                                            <img
                                                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                                                alt={item.weather[0].description}
                                            />
                                            <p>{item.main.temp}°C</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {showError && <Errors />}
        </div>
    );
};

export default Display;
