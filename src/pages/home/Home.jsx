import { Hero } from "./Hero";
import { Category } from "./Category";
import { Rooms } from "./Room";
import { Services } from "./Services";
import { Collection } from "./Collection";
import { Newsletter } from "./Newsletter";
import { SalesDealsCard } from "../../ui/cards-layout/SalesDealsCard";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Rooms />
      <Collection />
      <Category />
      <SalesDealsCard />
      <Newsletter />
    </div>
  );
}
