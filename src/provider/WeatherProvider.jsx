import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

const WeatherProvier = ({ children }) => {
    const { loading, error, weatherData } = useWeather();

    return (
        <WeatherContext.Provider value={{ loading, error, weatherData }}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvier;
