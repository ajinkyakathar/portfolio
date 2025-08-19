import React from "react";
import { projects } from "../utils/data";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px- max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work. Each project was carefully crafted
            to solve specific problems.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between">
                      <a
                        href={project.gitlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap flex items-center group"
                        style={{ borderRadius: "20px" }}
                      >
                        <i className="fab fa-github mr-2 group-hover:scale-110 transition-transform duration-300"></i>
                        Code
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap flex items-center group"
                        style={{ borderRadius: "20px" }}
                      >
                        <i className="fas fa-external-link-alt mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                        Live link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {/* <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 