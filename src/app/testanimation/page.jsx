"use client";

import { motion } from "framer-motion";

const variants = {
  variant1: {
    x: 400,
    y: 300,
    opacity: 0.5,
    transition: { duration: 2 },
  },
  variant2: {
    x: 100,
    y: -300,
    rotation: 90,
  },
};

const TestPage = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <motion.div
        className="w-48 h-48 bg-red-500 rounded"
        variants={variants}
        animate="variant2"
      ></motion.div>
    </div>
  );
};

export default TestPage;
