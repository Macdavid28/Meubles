import { useRef } from "react";
import { motion, useInView } from "framer-motion";
export const Collection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="relative block text-left">
      <img
        src="https://i.postimg.cc/KY6tQ4mj/collection-banner.png"
        alt=""
        className="w-full h-[430px] object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <motion.div
        ref={ref}
        className="absolute block top-14 md:top-14 p-2 md:p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <h1 className=" text-xl md:text-3xl mt-10 md:text-[50px] text-white text-left font-bold font-lora">
          Your Furniture Says A Lot About You
        </h1>
        <p className="my-4 md:my-8 text-md  md:text-3xl text-white font-semibold text-left font-lora">
          Pick from our variety of collections
        </p>
        <button className="my-4 p-3 rounded-md border-2 font-semibold border-white text-white block text-left text-lg md:text-xl  font-lora">
          Explore Our Collection
        </button>
      </motion.div>
    </div>
  );
};
