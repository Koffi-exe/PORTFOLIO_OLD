import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>

      <div className="">
        {PROJECTS.map((project, index) => (
          <div className="flex flex-wrap  lg:justify-center" key={index}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 pb-6 my-7"
            >
              <img
                className="rounded-xl"
                src={project.image}
                width={150}
                height={150}
              />
              <div className="flex  gap-4 mt-4">
              <button className="bg-slate-400 text-black font-bold p-2 rounded-xl">CODE</button>
              <button className="bg-slate-400 text-black font-bold p-2 rounded-xl">LIVE</button>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full  max-w-xl lg:w-3/4"
            >
              <h5 className="mb-2 font-semibold text-purple-400">
                {project.title}
              </h5>
              <p className="mb-4">{project.description}</p>
              <div className="flex">
                {project.technologies.map((technology, index) => (
                  <p
                    key={index}
                    className="mr-3 p-2 rounded-xl text-blue-500 bg-neutral-700"
                  >
                    {technology}{" "}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
