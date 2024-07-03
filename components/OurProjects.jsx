import React from "react";
import { projects } from "../utils/constant";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { ContextUser } from "../utils/ReusableFunctions";

const  OurProjects = () => {
  const { setProject, project } = ContextUser();

  return (
    <div className=" py-5 md:py-20 px-6 md:px-24">
      <p className="text-primary text-center font-bold text-4xl capitalize">
        Our Projects
      </p>
      <div className="flex w-full justify-between gap-5 flex-wrap flex-col md:flex-row mt-5">
        {projects.slice(0, 3).map((project, i) => (
          <ProjectCard
            def={project.def}
            path={project.path}
            name={project.name}
            icon={project.icon}
            key={i}
          />
        ))}
      </div>
      <button
        onClick={() => setProject(!project)}
        className="justify-end flex items-end mt-5 duration-200 hover:bg-primary hover:text-white px-6 py-3 rounded-full w-fit text-primary font-semibold"
      >
        See All Projects
      </button>
    </div>
  );
};

export default OurProjects;
