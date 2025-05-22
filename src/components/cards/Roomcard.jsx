import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
export const RoomCard = ({ name, imgUrl, link }) => {
  const [button, setButton] = useState(false);

  return (
    <div>
      <div
        className="relative"
        onMouseOver={() => setButton(true)}
        onMouseLeave={() => setButton(false)}
      >
        <img src={imgUrl} alt="" />
        <Link to={link}>
          {button ? (
            <ArrowRightIcon className="w-8 text-white absolute bottom-40 right-40 z-50" />
          ) : undefined}
        </Link>
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 z-10 transition-opacity duration-300"></div>
      </div>
      <div className="bg-gray-300 bg-opacity-45 ">
        <h1 className="text-center text-xl  w-full py-2 border border-black bg-gray-900 text-white font-Cinzel ">
          {name}
        </h1>
      </div>
    </div>
  );
};
