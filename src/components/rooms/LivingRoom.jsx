import livingRoom from "../../data/rooms.json";
import { LivingRoomLayout } from "../../ui/rooms-layout/LivingRoomLayout";
export const LivingRoom = () => {
  return (
    <div className="grid grid-cols-3">
      {livingRoom.rooms
        .filter((room) => room.category === "living-room")
        .map((livingRoom) => (
          <div key={livingRoom.id} className="grid grid-cols-3s">
            <LivingRoomLayout
              name={livingRoom.name}
              id={livingRoom.id}
              price={livingRoom.price}
              imgUrl={livingRoom.imgUrl}
            />
          </div>
        ))}
    </div>
  );
};
