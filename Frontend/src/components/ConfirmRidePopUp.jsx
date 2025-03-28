import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h5
        className=" p-2 text-center w-[90%]  absolute top-0 right-2 "
        onClick={() => {
          props.setConfirmRidePopupPanel(false);
        }}
      >
        <i className=" text-2xl  text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this ride to Start!{" "}
      </h3>
      <div className="flex items-center justify-between p-2 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-11 rounded-full object-cover"
            src="https://img.freepik.com/free-vector/organic-flat-dia-motorista-illustration_23-2148961409.jpg?uid=R193013355&ga=GA1.1.1896811457.1729647436&semt=ais_hybrid"
            alt=""
          />
          <h2 className="text-lg font-medium">Harsh Singh</h2>
        </div>
        <h5 className="text-lg font-medium">2.2Km</h5>
      </div>
      <div className=" flex flex-col gap-2 justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className=" text-lg ri-map-pin-range-fill"></i>
            <div>
              <h3 className="text-base font-medium">B/54</h3>
              <p className="text-sm text-gray-600"> Lanka, Varanasi</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className=" text-lg ri-map-pin-range-fill"></i>
            <div>
              <h3 className="text-base font-medium">Lane no.9</h3>
              <p className="text-sm text-gray-600"> Cantt, Varanasi</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className=" ri-currency-fill"></i>
            <div>
              <h3 className="  text-base font-medium">$2.99</h3>
              <p className="text-sm text-gray-600"> Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full ">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              type="text"
              className="bg-[#eee] text-center px-6 py-3 font-mono text-lg rounded-lg  w-full mt-3"
              placeholder="Enter OTP"
            />
            <Link
              to="/captain-riding"
              className="w-full flex justify-center  mt-4 bg-green-500 text-white font-semibold p-3 rounded-lg"
            >
              Confirm
            </Link>

            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full mt-2 bg-gray-400  text-white font-semibold p-3 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
