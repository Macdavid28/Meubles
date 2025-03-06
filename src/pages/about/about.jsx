import { AboutWriteUp } from "./AboutWriteUp";
import { ReviewCard } from "./ReviewCard";
import { useState, useEffect } from "react";
export const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const [mark, setMark] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    if (isMobile <= 768) {
      setMark(true);
    } else {
      setMark(false);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
  return (
    <div className="">
      <div className="relative">
        {mark ? (
          <img
            src="https://cdn-cms-assets.article.com/3c4XvT6HJBJXH4PBTaprIq-fc4fd4593c065bf6433c4a4ea3ad4837?w=425&q=80&fm=webp&fit=max"
            className="w-full h-[400px]"
            alt=""
          />
        ) : (
          <img
            src="https://cdn-cms-assets.article.com/7nxVFtKBt787FiOpOYFEsj-a25538808f0882eadd4832887f9387a1?w=1300&q=80&fm=webp&fit=max"
            alt=""
            className="w-full h-[400px]"
          />
        )}
        {mark && (
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        )}
        <h1 className="text-xl md:text-4xl text-white shadow-md font-bold absolute top-32 md:top-20 md:left-96 block text-center w-80%  md:w-[42%]">
          STYLE AND QUALITY, EXQUISITE AND HIGH STANDARD
        </h1>
      </div>
      <div className="grid grid-cols-2 justify-center  md:flex md:justify-evenly items-center my-20">
        <span className="py-4">
          <h1 className="text-4xl font-bold text-center">100k+</h1>
          <p className="text-xl text-center">Furniture </p>
        </span>
        <span className="py-4">
          <h1 className="text-4xl font-bold text-center">150+</h1>
          <p className="text-xl text-center">Branches</p>
        </span>
        <span className="py-4">
          <h1 className="text-4xl font-bold text-center">10k+</h1>
          <p className="text-xl text-center">Workers</p>
        </span>
        <span className="py-4">
          <h1 className="text-4xl font-bold text-center">5k+</h1>
          <p className="text-xl text-center">Customers</p>
        </span>
      </div>
      {/* <Why /> */}
      <AboutWriteUp />
      <ReviewCard />
    </div>
  );
};
