import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const AboutWriteUp = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, amount: 0.5 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.5 });

  return (
    <div className="px-4">
      <h1 className="text-2xl px-4 py-4 font-semibold">About Our Design</h1>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <motion.p
          ref={ref1}
          className="text-md p-4 w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Design is at the heart of what we do at Meubles. Our team of talented
          designers draws inspiration from both classic and contemporary styles
          to create pieces that are both stylish and functional. We believe that
          good design enhances the way you live, which is why we focus on
          creating furniture that seamlessly blends aesthetics with
          practicality. From sleek, modern lines to timeless, traditional
          details, our collections offer something for every taste, transforming
          your space into a reflection of your unique personality and lifestyle.
        </motion.p>
        <motion.img
          ref={ref1}
          src="https://i.postimg.cc/5NhLq6gr/about-one.png"
          alt="Furniture"
          className="p-2 mt-4 lg:mt-0 lg:p-4 w-full lg:w-1/2 object-cover h-[300px]"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </div>

      <h1 className="text-2xl px-4 py-4 font-semibold">
        Our Commitment to Quality and Design
      </h1>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <motion.img
          ref={ref2}
          src="https://i.postimg.cc/ZqZN221F/about-two.png"
          alt="Furniture"
          className="p-2 lg:p-4 w-full lg:w-1/2 object-cover h-[300px]"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <motion.p
          ref={ref2}
          className="text-md p-4 w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          At Meubles, we believe that great furniture starts with great design
          and quality craftsmanship. Our design philosophy revolves around
          creating beautiful, timeless pieces that elevate your living space.
          Each item in our collection is thoughtfully designed, blending form
          and function to suit modern lifestyles. We prioritize using
          high-quality materials and sustainable practices to ensure our
          furniture not only looks stunning but also stands the test of time.
          With a keen eye for detail and a passion for excellence, our team is
          dedicated to delivering furniture that exceeds your expectations in
          both style and durability.
        </motion.p>
      </div>
    </div>
  );
};
