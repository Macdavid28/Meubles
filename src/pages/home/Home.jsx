import React from "react";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Rooms } from "./Rooms";
import { Collection } from "./Collection";
import { Gallery } from "./Gallery";
import { SalesDealsCard } from "@components/cards/Salesdealscard";
import { Newsletter } from "./Newsletter";


export const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Rooms />
      <Collection />
      <Gallery />
      <SalesDealsCard />
      <Newsletter />
    </div>
  );
};
