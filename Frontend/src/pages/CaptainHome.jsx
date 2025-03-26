import React from "react";
import { Link } from "react-router-dom";
const CaptainHome = () => {
  return (
    <div className="h-screen">
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

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-start gap-4">
            <img className="h-10 w-10 rounded-full object-cover" src="https://img.freepik.com/free-vector/organic-flat-dia-motorista-illustration_23-2148961409.jpg?uid=R193013355&ga=GA1.1.1896811457.1729647436&semt=ais_hybrid" alt="" />
            <h4 className="text-lg font-medium">Harsh Singh</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">$9.43</h4>
            <p className="text-sm  text-gray-500">Earned</p>
          </div>
        </div>
        <div className="flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-8 items-start">
          <div className="text-center">
            <i className=" text-3xl  font-thin  ri-timer-2-line"></i>
            <h5 className="text-lg font-medium">10.5</h5>
            <p className="text-sm text-gray-600"> Hours Online</p>
          </div>
          <div className="text-center mr-2">
            <i className=" text-3xl font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">30</h5>
            <p className="text-sm text-gray-600"> KiloMeter</p>
          </div>
          <div className="text-center">
            <i class=" text-3xl font-thin ri-wallet-2-line"></i>
            <h5 className="text-lg font-medium">18.74</h5>
            <p className="text-sm text-gray-600"> Dollar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
