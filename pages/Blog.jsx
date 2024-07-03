import React from 'react'
import { blogs } from '../utils/constant'

const Blog = () => {
  return (
    <div className="md:pt-mid pb-tip px-6 md:px-mid">
      <div className="font-bold text-3xl md:text-5xl text-center mb-8">
        Explore Our Blog
      </div>
      <div className="flex shadow-sm flex-col md:flex-row gap-5">
        {blogs?.map((item, i) => (
          <div
            key={i}
            className="md:w-[500px] w-full h-fit md:h-[700px] rounded-md"
          >
            <img
              src={item.image}
              alt="stop-image"
              className="md:h-[310px] w-full rounded-t-md"
            />
            <div className="p-3 bg-slate-100 rounded-b-md">
              <span className="text-sm font-normal text-green ">
                Jun 20, 2024
              </span>
              <h3 className="text-xl font-bold ">{item.title}</h3>
              <span className="font-light text-base text-justify">
                {item.context}
              </span>
              <div className="flex justify-center items-center py-4">
                <button className="border border-green text-primary py-[6px] px-[8px]">
                  view post
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog