// FurnitureCarousel.js
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="bg-[#F3F4F6] grid grid-cols-1 lg:flex items-center justify-center">
      <div className="my-5">
        <h1 className="text-5xl lg:text-7xl p-4 font-light font-cinzel ">
          Luxury & Elegance
        </h1>
        <p className="text-xl p-4 md:w-[75%] font-cinzel ">
          Give Your House A Look That Exude Style and Elegance. Explore Our
          Curated Collection Of Furniture Designs
        </p>
        <Link to="/products">
          <button className="ml-4 px-4 py-2 bg-black text-white rounded-md font-cinzel">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        src="https://cdn-cms-assets.article.com/1lSlOayxp3oQ9whTTfA7Nu-e636da49fd04422757fc0dc2839a9341?w=1300&q=80&fm=webp&fit=max"
        alt={"Furniture"}
        className="p-2 mt-4 lg:p-4 w-[100%] rounded-md lg:w-[50%] object-cover h-[500px]"
      />
    </div>
  );
};
