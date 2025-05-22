import livingRoom from "@data/rooms.json";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export const LivingRoom = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mt-4 mx-4 text-sm">
        <Link to="/">Home</Link>
        <span>
          <ChevronRightIcon className="w-3" />
        </span>
        Living Room
      </div>
      <h1 className="text-3xl px-4 text-black my-6 font-semibold ">
        Living Room
      </h1>
      <div className="grid grid-cols-1 768:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 my-8 font-lora italic">
        {livingRoom.rooms
          .filter((room) => room.category === "living-room")
          .map((livingRoom) => (
            <div key={livingRoom.id} className="grid grid-cols-1">
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <Link to={`/rooms/${livingRoom.name}`}>
                    <img src={livingRoom.imgUrl} alt="" className="relative" />
                  </Link>
                  <span className="flex items-center justify-between">
                    <p className="py-4 font-bold text-lg">{livingRoom.name} </p>
                    <p>
                      ₦ {livingRoom.price.toLocaleString().toLocaleString()}{" "}
                    </p>
                  </span>
                  <Link to={`/rooms/${livingRoom.name}`}>
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
