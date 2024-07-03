import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../utils/constant";


const Projects = () => {
  const [current, setCurrent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    projects.map((project) => {
      if (project.path == id) {
        setCurrent(project);
      }
    });
  }, []);

  return (
    <div className="md:py-6 py-3">
      {current ? (
        <div>
          <div className=" bg-secondary py-5 md:py-10 px-6 md:px-24">
            <div className="">{current.icon}</div>

            <p className="text-primary text-center font-bold text-4xl capitalize">
              {current.name}
            </p>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-primary md:w-[800px] text-base text-center">
              {current.des}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-5xl text-center text-gray-400 font-bold py-10">
          Please select a service to preview
        </p>
      )}
    </div>
  );
};

export default Projects;
