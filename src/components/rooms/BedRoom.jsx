import bedroom from "../../data/rooms.json";
import { BedRoomLayout } from "../../ui/rooms-layout/BedRoomLayout";
export const BedRoom = () => {
  return (
    <div className="grid grid-cols-3">
      {bedroom.rooms
        .filter((bedroom) => bedroom.category === "bedroom")
        .map((bedroom) => (
          <BedRoomLayout
            name={bedroom.name}
            id={bedroom.id}
            price={bedroom.price}
            imgUrl={bedroom.imgUrl}
          />
        ))}
    </div>
  );
};
