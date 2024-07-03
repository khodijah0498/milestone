import React from "react";
import { Link,  } from "react-router-dom";
import { pageLinks, media } from "../utils/constant";
const logo = "";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary py-10 md:py-20 px-6 md:px-24">
      <div className=" flex md:grid grid-cols-4 gap-10 flex-col md:flex-row justify-between">
        <div>
          <Link to="/">
            <img className="h-10 my-auto" src={logo} alt="" />
          </Link>
          <p className="text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            deleniti inventore.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xl font-bold text-primary">Quick Links</p>
          <div className="flex flex-col capitalize gap-3 text-white">
            {pageLinks?.map((item, i) => (
              <navLinks key={i} to={item.path}>
                {item.name}
              </navLinks>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xl font-bold text-primary">Contact</p>
          <div className="flex flex-col capitalize gap-3 text-white">
            <div className="flex gap-3">
              <span className="text-primary my-auto">
                <MdLocationPin />
              </span>
              <p className="my-auto">
                14 Station Road, GRA, Ilorin, Kwara State, Nigeria.
              </p>
            </div>
            <Link to="mailto: Milestonem@gmail.com" className="flex gap-3">
              <span className="text-primary my-auto">
                <MdOutlineMail />
              </span>
              <p className="my-auto">Milestonem@gmail.com</p>
            </Link>
            <Link to="https://wa.me/2347030627945" className="flex gap-3">
              <span className="text-primary my-auto">
                <SiWhatsapp />
              </span>
              <p className="my-auto">+2347030627945</p>
            </Link>
            <Link to="tel: +2348070554185" className="flex gap-3">
              <span className="text-primary my-auto">
                <FaPhoneAlt />
              </span>
              <p className="my-auto">+2348070554185</p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-xl font-bold text-primary">Social Media</p>
          <div className="flex flex-col capitalize gap-3 text-white">
            {media?.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                target="blank"
                className="flex gap-2"
              >
                <span className="my-auto text-primary">{item.icon}</span>
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <hr className="h-[1px] bg-slate-700 w-full" />
        <div className="flex gap-2 mt-2 text-gray-400 items-end justify-end">
          <div className="flex gap-5 my-auto mr-10">
            {media.map((item, i) => (
              <Link
                to={item.path}
                className="hover:text-primary duration-200"
                target="blank"
                key={i}
              >
                {item.icon}
              </Link>
            ))}
          </div>
          <span className="my-auto">&copy;</span>
          <p className="text-xs my-auto">Milestone Agenga</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
