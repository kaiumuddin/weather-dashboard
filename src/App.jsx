import Page from "./Page";
import {
    FavouriteProvider,
    WeatherProvier,
    LocationProvider,
} from "./provider";

export default function App() {
    return (
        <LocationProvider>
            <WeatherProvier>
                <FavouriteProvider>
                    <Page />
                </FavouriteProvider>
            </WeatherProvier>
        </LocationProvider>
    );
}
