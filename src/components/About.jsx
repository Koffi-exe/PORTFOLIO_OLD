import React from "react";
import { motion } from "framer-motion";
import img from "../assets/about.jpeg";

const About = () => {
  return (
    <div className="my-12 text-center">
      <h3 className="text-5xl mb-12">About Me</h3>
      <div className="px-20 flex  gap-10 justify-between items-center">
        <div className="w-1/2 opacity-60">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: .5 }}
            className="opacity-0 rounded-xl"
            src={img}
          />
        </div>
        <motion.div
        initial={{x:100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, delay:.5}}
        className="w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          nihil! Architecto ipsum aperiam quasi illo quibusdam soluta ex debitis
          odit aliquid quia, voluptas eum esse accusantium necessitatibus vitae
          tempore vero cupiditate pariatur aliquam quidem asperiores
          voluptatibus quod repudiandae nesciunt! Voluptatum libero soluta
          blanditiis quibusdam laudantium officgit saepe dolore veniam ipsa et
          adipisci.
        </motion.div>
      </div>
    </div>
  );
};

export default About;
