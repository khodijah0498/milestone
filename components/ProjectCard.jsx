import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ icon, name, path, def }) => {
  return (
    <Link
      to={`projects/${path}`}
      className="rounded-md border w-full md:w-[30%]   bg-[#ffffff] border-primary "
    >
      <div className="  ">
        <img className="h-full w-full rounded-md" src={icon}></img>
      </div>
      <div className=" flex flex-col gap-2 py-3 px-4">
        <p className="text-xl font-bold text-green">{name}</p>
        <p className="text-sm text-justify">{def}</p>

        <div className="text-[10px] flex justify-end text-green items-end  ">Know more...</div>
      </div>
    </Link>
  );
};

export default ProjectCard;
