import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative w-full h-[90vh]">
      {/* Background Image */}
      <img
        src="https://i.postimg.cc/Lszc6YQF/banner.webp"
        alt="Furniture"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 md:px-12 lg:px-20">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-xl sm:text-4xl md:text-5xl xl:text-7xl font-semibold mb-6 font-Cinzel"
        >
          Luxury And Elegance
        </motion.h1>

        <div className="border-b border-white w-full mb-6"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-sm sm:text-base md:text-lg xl:w-1/2"
          >
            Step into a world where sophistication meets comfort. Our exclusive
            furniture collection brings timeless elegance and unparalleled
            luxury to your home. Each piece is crafted with meticulous attention
            to detail, designed to elevate your space with style and grace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="self-start md:self-auto border border-white p-4 rounded-full cursor-pointer hover:bg-white/10 transition"
          >
            <Link to="/beds">
              {" "}
              <ArrowRightIcon className="h-8 w-8 text-white" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
