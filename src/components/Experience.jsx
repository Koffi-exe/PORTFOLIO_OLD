import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div>
      <h2 className="my-20 text-center text-5xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1}}
              transition={{duration:.5}}
              className=" w-full lg:w-1/4"
            >
              <p className="mb-2 text-2">{experience.year}</p>
            </motion.div>
            <motion.div
            initial={{x:100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:1}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold ">
                {experience.role} -{" "}
                <span className="text-sm text-purple-400">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400"> {experience.description}</p>
              {experience.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-3 p-2 rounded-xl text-blue-500 bg-neutral-700"
                >
                  {technology}{" "}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
