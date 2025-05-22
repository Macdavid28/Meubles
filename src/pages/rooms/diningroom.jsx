import diningRoom from "@data/rooms.json";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export const DiningRoom = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mt-4 mx-4 text-sm">
        <Link to="/">Home</Link>
        <span>
          <ChevronRightIcon className="w-3" />
        </span>
        Dining Room
      </div>
      <h1 className="text-3xl px-4 text-black my-6 font-semibold ">
        Dining Room
      </h1>
      <div className="grid grid-cols-1 768:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 my-8 font-lora italic ">
        {diningRoom.rooms
          .filter((room) => room.category === "dining-room")
          .map((diningRoom) => (
            <div key={diningRoom.id} className="grid grid-cols-1">
              <div className="flex flex-col items-center justify-center">
                <div className="">
                  <Link to={`/rooms/${diningRoom.name}`}>
                    <img src={diningRoom.imgUrl} alt="" className="relative" />
                  </Link>
                  <span className="flex items-center justify-between">
                    <p className="py-4 font-bold text-lg">{diningRoom.name} </p>
                    <p>
                      ₦ {diningRoom.price.toLocaleString().toLocaleString()}{" "}
                    </p>
                  </span>
                  <Link to={`/rooms/${diningRoom.name}`}>
                    <p className="text-gray-500 underline">View details </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
