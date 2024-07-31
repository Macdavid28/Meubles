import { Hero } from "../../pages/Hero";
import { Search } from "../search";
import { Category } from "./Category";
import { Rooms } from "./Room";
import { Services } from "./Services";
import { SalesDeals } from "./SalesDeals";
import { Collection } from "./Collection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Rooms />
      <Collection />
      <Category />
      <SalesDeals />
      <Search />
    </div>
  );
}
