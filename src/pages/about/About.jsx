import { motion } from "framer-motion";
import { AboutWriteUp } from "./AboutWriteUp";
import { ReviewCard } from "./ReviewCard";
import { useState, useEffect } from "react";

export const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="">
      {/* Banner Image */}
      <div className="relative">
        <img
          src={
            isMobile
              ? "https://i.postimg.cc/L57fWXpn/about-banner-small.png"
              : "https://i.postimg.cc/Gh8vykFY/about-banner-large.png"
          }
          className="w-full h-[300px] md:h-[400px] object-cover"
          alt="About Banner"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.h1
          className="text-xl md:text-4xl font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%] md:w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          STYLE AND QUALITY, EXQUISITE AND HIGH STANDARD
        </motion.h1>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 justify-center items-center my-10 px-4">
        {[
          { count: "100k+", label: "Furniture" },
          { count: "150+", label: "Branches" },
          { count: "10k+", label: "Workers" },
          { count: "5k+", label: "Customers" },
        ].map((item, idx) => (
          <span key={idx} className="py-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              {item.count}
            </h1>
            <p className="text-lg md:text-xl text-center">{item.label}</p>
          </span>
        ))}
      </div>

      {/* Content */}
      <AboutWriteUp />
      <ReviewCard />
    </div>
  );
};
