import { HomeIcon, HomeModernIcon } from "@heroicons/react/24/solid";
import chairIcon from "@/assets/chair.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="mt-32">
      <h1 className="text-3xl text-gray-500 uppercase font-Cinzel text-center">
        Our Services
      </h1>
      <div className="mt-3 border-t-2 border-black w-[130px] mx-auto rounded-full"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-5 lg:flex">
        <motion.div
          ref={ref}
          className="px-8  bg-main-gray py-4 border-l-2 border-b-2"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <HomeIcon className="w-14 md:w-20 text-black  p-4 cursor-pointer" />
          <h1 className=" text-2xl md:text-xl text-black py-4  font-bold">
            Interior Design
          </h1>
          <p className="text-sm md:w-[85%]  w-[300px]  text-black">
            At Meubles we offer exquisite interior designs from experts to best
            suit our clients' unique style and elegance.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          className="px-8  bg-main-gray py-4 border-l-2 border-b-2"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={chairIcon} className="md:h-20  p-4 cursor-pointer" alt="" />
          <h1 className=" text-2xl md:text-xl text-black py-4  font-bold">
            Furniture Setup
          </h1>
          <p className="text-sm w-[70%]  text-black">
            At Meubles we offer installment and arrangement for our clients
            based on their preference.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          className="px-8 bg-main-gray py-4 border-l-2 border-b-2"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <HomeModernIcon className="md:w-20 w-14 text-black  p-4 cursor-pointer" />
          <h1 className=" text-2xl md:text-xl text-black py-4  font-bold">
            Outdoor Design
          </h1>
          <p className="text-sm w-[70%]  text-black">
            At Meubles we offer elegant exterior designs according to our
            clients' taste and preference.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
