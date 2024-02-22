import pin from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import { useContext } from "react";
import { getFormatedDate } from "../../utils/date-util";

import cloud from "../../assets/cloud.svg";
import haze from "../../assets/haze.svg";
import rainy from "../../assets/rainy.svg";
import thunder from "../../assets/thunder.svg";
import snow from "../../assets/icons/snow.svg";
import sunny from "../../assets/icons/sunny.svg";

export default function WeatherHeadline() {
    const { weatherData } = useContext(WeatherContext);
    const { climate, location, temperature, time } = weatherData;
    const time2 = getFormatedDate(time, "time", false);
    const date = getFormatedDate(time, "date", false);

    function getWeatherIcon(climate) {
        const icons = {
            Rain: rainy,
            Clouds: cloud,
            Clear: sunny,
            Snow: snow,
            Thunder: thunder,
            Fog: haze,
            Haze: haze,
            Mist: haze,
        };
        return icons[climate] || sunny;
    }

    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <img src={getWeatherIcon(climate)} alt={climate} />
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
                        {Math.round(temperature)}°
                    </h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={pin} />
                        <h2 className="text-2xl lg:text-[50px]">{location}</h2>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg">
                {time2} - {date}
            </p>
        </div>
    );
}
