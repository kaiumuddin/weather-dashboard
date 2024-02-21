import { useState, useEffect } from "react";

const useWeather = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    });

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fetching weather data...",
            });

            const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
            const response = await fetch(url);

            if (!response.ok) {
                const errorMessage = `Fetching weather data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();

            const updateWeatherData = {
                ...weatherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
            };

            setWeatherData(updateWeatherData);
        } catch (err) {
            setError(err);
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: "",
            });
        }
    };

    useEffect(() => {
        setLoading({
            state: true,
            message: "Finding location...",
        });

        navigator.geolocation.getCurrentPosition(function (position) {
            fetchWeatherData(
                position.coords.latitude,
                position.coords.longitude
            );
        });
    }, []);

    return {
        weatherData,
        error,
        loading,
    };
};

export default useWeather;
