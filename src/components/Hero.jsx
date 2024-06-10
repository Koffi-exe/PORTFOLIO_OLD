import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img from "../assets/kevinRushProfile.png";

const Hero = () => {
  const jobList = [
    "Web Developer",
    "Front-end Developer",
    "Back-end Developer",
    "React Developer",
  ];
  const [currentTitle, setCurrentTitle] = useState(jobList[0]);
  const [titleCount, setTitleCount] = useState(0);
  const framer = (delay) => ({
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: delay, duration: .5 },
    },
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleCount((prevCount) => {
        const newCount = prevCount < jobList.length - 1 ? prevCount + 1 : 0;
        setCurrentTitle(jobList[newCount]);
        return newCount;
      });
    }, 2000);

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, [jobList]);
  return (
    <div className=" p-5 my-20">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex-col item-center lg:items-start ">
            <motion.h1
              variants={framer(0)}
              initial="hidden"
              animate="visible"
              className="text-slate-500 mb-12 mt-16 text-4xl sm:text-4xl md:text-6xl lg:text-8xl tracking-tight "
            >
              Adithya Sasi
            </motion.h1>

            <motion.span
              variants={framer(0.5)}
              initial="hidden"
              animate="visible"
              className="text-3xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
            >
              {currentTitle}
            </motion.span>

            <motion.p
              variants={framer(1)}
              initial="hidden"
              animate="visible"
              className="text-slate-500 my-5 tracking-tighter"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quia obcaecati inventore maxime hic. Mollitia illo corporis
              maiores quas ipsum earum quia quaerat eveniet nostrum iste harum
              consequatur, tempora deleniti ullam voluptatibus repudiandae
              eaque? Porro pariatur mollitia in est saepe iure facilis eos
              architecto! Amet!
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className=" flex justify-center lg:justify-end ">
            <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}} className="" src={img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
