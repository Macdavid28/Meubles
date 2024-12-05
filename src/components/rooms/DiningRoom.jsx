import diningRoom from "../../data/rooms.json";
import { DiningRoomLayout } from "../../ui/rooms-layout/DiningRoomLayout";
export const DiningRoom = () => {
  return (
    <div className="grid grid-cols-3">
      {diningRoom.rooms
        .filter((room) => room.category === "dining-room")
        .map((diningRoom) => (
          <div key={diningRoom.id} className="grid grid-cols-3s">
            <DiningRoomLayout
              name={diningRoom.name}
              id={diningRoom.id}
              price={diningRoom.price}
              imgUrl={diningRoom.imgUrl}
            />
          </div>
        ))}
    </div>
  );
};
