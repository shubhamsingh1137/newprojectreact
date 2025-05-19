import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";

const First = () => {
  return (
    <div
      className="bg-gradient-to-l from-pink-100 to-white
"
    >
      <div className="flex justify-center items-center text-5xl font-bold text-black mt-10 lg:mt-20 pt-10">
        Blogs
      </div>
      <div className="flex justify-center items-center text-3xl  font-semibold  text-gray-900 mt-5 pt-10">
        Our Few Blogs are Presented Here
      </div>
      <div className=" lg:flex">
        <div className="w-180 h-240 border-2 m-5 flex justify-center border-blue-300 rounded-2xl shadow-2xl ">
          <div className=" w-150 h-65 border-2 mt-5  border-blue-300 rounded-2xl shadow-2xl ">
            <div className="lg:flex ">
              <img
                className="w-60 h-50 m-8"
                src="https://aaratechblog.s3.amazonaws.com/media/blog_images/jkwerngkehfktrnhtgyuhgynyjiugjyhug86ytg76qtf7ibr_by6t547fg4ybtyg7852.jpg"
              ></img>
              <div className="pt-10 ">
                <span className="text-white font-semibold  bg-blue-600 text-3xl">
                  Technology
                </span>
                <p className="mt-5 text-3xl font-semibold text-black">
                  The Future of Python
                </p>
                <p className="text-2xl mt-3">The Future of Python</p>
                <p className="text-2xl text-orange-600 cursor-pointer">
                  Read More...
                </p>
              </div>
            </div>
            <div className="w-150 h-15 border-2 text-2xl cursor-pointer font-semibold bg-white flex justify-center items-center gap-4 text-blue-600 border-blue-300 rounded-2xl mt-5">
              <IoShareSocialSharp />
              <p>SHARE</p>
            </div>
            {/* 2nd card */}
            <div>
              {" "}
              <div className="lg:flex  w-150 h-110 border-2 mt-5  border-blue-300 rounded-2xl shadow-2xl  ">
                <img
                  className="w-60 h-80 m-5"
                  src="https://aaratechblog.s3.amazonaws.com/media/blog_images/f_WkcfVRv.jpeg"
                ></img>
                <div className="pt-5 ">
                  <div className=" flex gap-3">
                    <div>
                      <span className="text-white font-semibold  bg-blue-600 text-2xl">
                        Custom development
                      </span>
                    </div>
                    <div>
                      <span className="text-white pl-5 font-semibold  bg-blue-600 text-2xl">
                        2023-02-22T07:42:43
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-2xl font-semibold text-black">
                    Top Mobile App Development Trends for 2022
                  </p>
                  <p className="text-xl mt-1">
                    The continuous growth in mobile app technology is
                    ever-lasting & non-stoppable. Mobile apps are no more a
                    necessity but a demand of the masses. Businesses are now
                    immensely working on..
                  </p>
                  <p className="text-xl text-orange-600 cursor-pointer mt-1">
                    Read More...
                  </p>
                </div>
              </div>
              <div className="w-150 h-15 border-2 text-2xl cursor-pointer font-semibold bg-white flex justify-center items-center gap-4 text-blue-600 border-blue-300 rounded-2xl mt-5">
                <IoShareSocialSharp />
                <p>SHARE</p>
              </div>
            </div>
          </div>
        </div>
        {/* right side content */}
        <div className=" w-140 h-240 mt-5 rounded-2xl border-2 border-blue-300">
          <p className="font-bold text-4xl m-5">Recent Posts</p>
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-5 w-120 h-50 mt-20 rounded-2xl border-2 border-blue-300">
              <img
                className="w-60 h-50"
                src="https://aaratechblog.s3.amazonaws.com/media/blog_images/jkwerngkehfktrnhtgyuhgynyjiugjyhug86ytg76qtf7ibr_by6t547fg4ybtyg7852.jpg"
              ></img>
              <p className="text-2xl underline text-orange-600 cursor-pointer">
                Read More...
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex  gap-5 w-120 h-65 mt-20 rounded-2xl border-2 border-blue-300">
              <img
                className="w-60 h-50 pt-5"
                src="https://aaratechblog.s3.amazonaws.com/media/blog_images/f_WkcfVRv.jpeg"
              ></img>
              <div>
                <p className="text-2xl text-black underline font-semibold cursor-pointer">
                  Top Mobile App Development, Mobile App Development Trends, Top
                  Mobile App Development Company
                </p>
                <p className="mt-5 text-xl text-blue-600">
                  2023-02-22T07:42:43
                </p>
                <p className="text-2xl underline text-orange-600 cursor-pointer">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
