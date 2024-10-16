import { RoomCard } from "../../ui/cards-layout/RoomCard";
export const Rooms = () => {
  const roomList = [
    {
      name: "Living Room",
      imgUrl:
        "https://cdn-cms-assets.article.com/2wED57geKONRmNozTj2H7D-d537346f692af7412c81fa0ed510d4fa?w=640&q=40&fit=max",
      id: 1,
      link: "/living-room",
    },
    {
      name: "Bedroom",
      imgUrl:
        "https://cdn-images.article.com/productbundles/457/HERO_DESKTOP/productbundle457-1713294088402.jpg?w=425&q=80&fm=webp&fit=max",
      id: 2,
      link: "/bedroom",
    },
    {
      name: "Dining Room",
      imgUrl:
        "https://cdn-cms-assets.article.com/5RhufExdQYdr67nCC2RIHF-59657f4b588dc894a04bb12396c87b69?w=640&q=40&fit=max",
      id: 3,
      link: "/dining-room",
    },
  ];

  return (
    <div>
      <div className="px-4 md:px-8 block text-center mt-14">
        <h1 className="text-xl md:text-3xl text-gray-500 font-cinzel">
          Shop By Room
          <div className="border border-black rounded-full border-t-2  w-32 md:w-50 my-4 mx-auto"></div>
        </h1>
      </div>
      <div className="p-4 md:p-8  grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8">
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
