import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { animate, motion } from "framer-motion";

const framer = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechStack = () => {
  return (
    <div className=" px-20  my-20">
      <div className="text-stale-500 text-center text-5xl my-20">
        Technologies
      </div>

      <motion.div
        initial={{x:-100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1}}
      className="flex flex-wrap justify-center gap-5 sm:text-3xl md:text-4xl lg:text-6xl text-4xl">
        <motion.div
          variants={framer(1)}
          initial="initial"
          animate="animate"
          className="border p-3 border-gray-500 text-cyan-500 rounded-xl"
        >
          <FaReact />
        </motion.div>
        <motion.div
          variants={framer(1.5)}
          initial="initial"
          animate="animate"
          className="border p-3 border-gray-500 text-orange-500 rounded-xl"
        >
          <FaHtml5 />
        </motion.div>
        <motion.div
          variants={framer(1)}
          initial="initial"
          animate="animate"
          className="border p-3 border-gray-500 text-green-500 rounded-xl"
        >
          <FaNodeJs />
        </motion.div>
        <motion.div
          variants={framer(1.5)}
          initial="initial"
          animate="animate"
          className="border p-3 border-gray-500 text-green-600 rounded-xl"
        >
          <DiMongodb />
        </motion.div>
        <motion.div 
         variants={framer(1)}
         initial="initial"
         animate="animate"
        className="border p-3 border-gray-500 text-blue-500 rounded-xl">
          <DiMysql />
        </motion.div>
        <motion.div
          variants={framer(1.5)}
          initial="initial"
          animate="animate"
          className="border p-3 border-gray-500 text-blue-500 rounded-xl"
        >
          <FaCss3 />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechStack;
