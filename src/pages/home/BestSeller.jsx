import { BestSellerData } from "../../data/bestsellerData";
import { useState } from "react";
import { BestSellerCard } from "./BestSellerCard";
export const BestSeller = () => {
  const [bestSellerList, setBestSellerList] = useState(BestSellerData);
  return <BestSellerCard bestSellerList={bestSellerList} />;
};
