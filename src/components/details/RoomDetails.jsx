import rooms from "../../data/rooms.json";
import { useParams, Link } from "react-router-dom";
export const RoomDetails = () => {
    const {rooms} = useParams
  rooms.rooms.find((room) => room.name === room);
  return <div>RoomDetails</div>;
};
