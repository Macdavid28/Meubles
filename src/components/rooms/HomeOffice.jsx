import homeOffice from "../../data/rooms.json";
import { HomeOfficeLayout } from "../../ui/rooms-layout/HomeOfficeLayout";
export const HomeOffice = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {homeOffice.rooms
        .filter((room) => room.category === "home-office")
        .map((homeOffice) => (
          <div key={homeOffice.id} className="">
            <HomeOfficeLayout
              name={homeOffice.name}
              id={homeOffice.id}
              price={homeOffice.price}
              imgUrl={homeOffice.imgUrl}
            />
          </div>
        ))}
    </div>
  );
};
