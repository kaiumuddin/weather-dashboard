import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherProvier } from "./provider";

export default function App() {
    return (
        <WeatherProvier>
            <div className="bg-body font-[Roboto] text-light bg-[url('./assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
                <Header />
                <main>
                    <section className="">
                        <WeatherBoard />
                    </section>
                </main>
            </div>
        </WeatherProvier>
    );
}
