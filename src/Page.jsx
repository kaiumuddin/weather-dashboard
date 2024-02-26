import { useContext } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

export default function Page() {
    const { loading, weatherData } = useContext(WeatherContext);

    function getBackgroundImage(climate) {
        switch (climate) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return ScatterdCloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunder":
                return ThunderStormImage;
            case "Fog":
                return WinterImage;
            case "Haze":
                return FewCloudsImage;
            case "Mist":
                return MistImage;
            default:
                return ClearSkyImage;
        }
    }

   
    return (
        <div
            style={{
                backgroundImage: `url('${getBackgroundImage(
                    weatherData.climate
                )}')`,
            }}
            className="bg-body font-[Roboto] text-light bg-no-repeat bg-cover h-screen grid place-items-center transition-all duration-300"
        >
            <Header />
            <main>
                <section className="">
                    <WeatherBoard />
                </section>
            </main>
        </div>
    );
}
