import { RoomCard } from "@components/cards/Roomcard";
export const Rooms = () => {
  const roomList = [
    {
      name: "Living Room",
      imgUrl: "https://i.postimg.cc/tCwtSrq2/Livingroom-bundle.png",
      id: 1,
      link: "/living-room",
    },
    {
      name: "Bedroom",
      imgUrl: "https://i.postimg.cc/hGxm5gyG/bedroombundlelading.png",
      id: 2,
      link: "/bedroom",
    },
    {
      name: "Dining Room",
      imgUrl: "https://i.postimg.cc/VLhQ7c0p/diningbundlelanding.png",
      id: 3,
      link: "/dining-room",
    },
  ];

  return (
    <div>
      <div className="px-4 md:px-8 block text-center mt-14">
      <h1 className="text-xl md:text-3xl text-gray-500">
          Shop By Room
          <div className="border border-black rounded-full border-t-2  w-32 md:w-40 my-4 mx-auto"></div>
        </h1>
      </div>
      <div className="p-4 md:p-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roomList.map((rooms, index) => (
          <div key={index}>
            <RoomCard
              name={rooms.name}
              id={rooms.id}
              imgUrl={rooms.imgUrl}
              link={rooms.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
