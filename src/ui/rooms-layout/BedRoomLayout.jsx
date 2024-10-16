import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export const BedRoomLayout = ({ name, id, price, imgUrl, title }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="relative text-center">
        <Link to="/">
          <img src={imgUrl} alt="" />
        </Link>
        <h1> {title} </h1>
        <h1 className="text-lg py-4 font-bold text-gray-900">{name}</h1>
        <p className="font-semibold text-gray-700">$ {price} </p>
        <HeartIcon className="w-12 bg-white p-3 absolute top-4 left-[23rem] cursor-pointer" />
        <ShoppingBagIcon className="w-12 bg-white p-3 absolute bottom-24 left-[23rem] cursor-pointer" />
      </div>
    </div>
  );
};
