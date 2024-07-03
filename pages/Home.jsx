import React from "react";
import OurProjects from "../components/OurProjects";
const home = "/images/home-page.jpeg"

const Home = () => {
  return (
    <div className="md:py-6 py-3 ">
      {/* <div className="items-center justify-center h-fit  bg-gradient-to-r from-purple-800 to-green-300 md:flex flex-row  p-24 ">
        <div> */}
      <div className=" home items-center justify-center h-fit relative ">
        <img className="h-full" src={home} alt="hOME-img" />
        <div className="absolute top-0 left-0 w-full h-full items-center justify-center flex flex-col">
          {/* <h1
            className="md:text-6xl text-3xl md:w-[1000px] w-full font-bold text-white text-center">

            </h1> */}
          <p className="text-background w-full md:flex md:w-[800px] mt-3 text-center md:text-5xl text-3xl font-bold ">
            MAFYEDI is a non-profit dedicated to empowering youth to drive
            social change and development in their communities
          </p>
          <div className="flex flex-row md:mt-12 mt-6 md:gap-14 gap-4">
            <button className="py-3 h-fit w-fit text-small md:flex  rounded-md px-12 bg-white  text-secondary">
              Donate
            </button>
            <button
              className="
              py-2
              h-fit
              w-fit
              text-small
              md:flex
              
              rounded-md
              px-8
              border-2
              border-greener
              text-white
              "
            >
              Newsletter
            </button>
          </div>
          {/* <form
            onSubmit={(e) => e.preventDefault()}
            className="flex relative mt-5"
          >
            <input
              placeholder="Search a website"
              className="h-12 pl-6 pr-6 md:pr-32 outline-none w-full rounded-[30px] border-2 border-light bg-transparent"
              type="text"
            />
                      </form> */}
        </div>

        {/* <img className="h-2/3 w-[38%]" src="/images/home-page.jpeg" alt="" /> */}
      </div>
      <OurProjects />
      
    </div>
  );
};

export default Home;
