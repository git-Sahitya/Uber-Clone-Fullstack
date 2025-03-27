import React from "react";
import { Link } from "react-router-dom";

const CaptainRiding = () => {
  return (
    <div className="h-screen relative">
      <div className="fixed p-4 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://logospng.org/download/uber/logo-uber-4096.png"
          alt=""
        />
        <Link
          to="/captain-login"
          className="  h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
          <i class=""></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 ">
        <h5
          className=" p-2 text-center w-[95%]  absolute top-0 right-2 "
          onClick={() => {}}
        >
          <i className=" text-2xl  text-gray-800 ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 Km away</h4>
        <button className="bg-green-500 text-white font-semibold p-3 px-8 rounded-lg">
          Complete Ride
        </button>
      </div>
    </div>
  );
};

export default CaptainRiding;
