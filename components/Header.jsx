import React, { useState } from "react";
import { HeaderNav, projects } from "../utils/constant";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
const logo = "/images/Milestone Agenda Logo new p.png";
import { ContextUser } from "../utils/ReusableFunctions";




 const Header = () => {
     const { displayProjects, navShow, setNav, project, setProject } =
      ContextUser();

     const navClose = () => {
       setProject(false);
       setNav(false);
       console.log.log("closed");
     };

   return (
     <div
       className={`flex shadow-sm sticky md:top-0 z-50 bg-white justify-between py-4 px-10 md:px-mid md:py-tip`}
     >
       <Link className="my-auto" to="/">
         <img className="md:h-8 h-5 my-auto" src={logo} alt="" />
       </Link>
       <div
         className={`flex gap-8  left-0 md:top-0 absolute bg-white md:bg-transparent duration-300 w-full md:w-fit p-6 md:p-0 md:relative capitalize ${
           navShow ? "top-16" : "top-[-1000px]"
         } my-auto md:flex-row flex-col text-black nvlt`}
       >
         <NavLink onClick={navClose} to="">
           Home
         </NavLink>
         <NavLink onClick={navClose} to="about">
           About Us
         </NavLink>
         <NavLink onClick={navClose} to="blog">
           Blog
         </NavLink>
         <div className="relative">
           <div onClick={displayProjects} className="cursor-pointer">
             Our Projects
           </div>
           <div
             className={`flex-col bg-primary text-white shadow-sm absolute rounded-md py-4 gap-2 ${
               project ? "flex" : "hidden"
             }`}
           >
             {projects.map((item, index) => (
               <Link
                 to={`projects/${item.path}`}
                 key={index}
                 onClick={navClose}
                 className="text-base py-2 hover:bg-primary px-3 whitespace-nowrap"
               >
                 {item.name}
               </Link>
             ))}
           </div>
         </div>
         <NavLink onClick={navClose} to="contact">
           Contact
         </NavLink>
       </div>
       <NavLink
         onClick={navClose}
         to="donate"
         className="py-2 h-fit w-fit text-small md:flex hidden rounded-md px-4 bg-secondary text-white"
       >
         Donate
       </NavLink>
       <div
         onClick={() => setNav(!navShow)}
         className="flex md:hidden my-auto text-primary text-2xl"
       >
         {navShow ? <IoCloseSharp /> : <RiMenu3Fill />}
       </div>
     </div>
   );
  };

export default Header;

