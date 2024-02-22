import heartIcon from "../../assets/heart.svg";
import redHeartIcon from "../../assets/heart-red.svg";

import { useContext, useState, useEffect } from "react";
import { FavouriteContext, WeatherContext } from "../../context";

export default function AddToFavourite() {
    const { addToFavourites, removeFromFavourites, favourites } =
        useContext(FavouriteContext);

    const { weatherData } = useContext(WeatherContext);
    const { latitude, longitude, location } = weatherData;

    const [isFavorite, toggleFavorite] = useState(false);

    function handleFavourites() {
        const found = favourites.find((fav) => fav.location === location);
        if (!found) {
            addToFavourites(latitude, longitude, location);
        } else {
            removeFromFavourites(location);
        }
        toggleFavorite(!isFavorite);
    }

    useEffect(() => {
        const found = favourites.find((fav) => fav.location === location);
        toggleFavorite(found);
    }, [favourites, location]);

    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button
                    className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
                    onClick={handleFavourites}
                >
                    <span>Add to Favourite</span>
                    <img src={isFavorite ? redHeartIcon : heartIcon} alt="" />
                </button>
            </div>
        </div>
    );
}
