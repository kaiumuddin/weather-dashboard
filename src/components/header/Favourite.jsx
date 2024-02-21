import FovouriteIcon from "../../assets/heart.svg";

export default function Favourite() {
    return (
        <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src={FovouriteIcon} alt="" />
            <span>Favourite Locations</span>
        </div>
    );
}
