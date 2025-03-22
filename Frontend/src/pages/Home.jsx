import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: " 70%",
      });
    } else {
      gsap.to(panelRef.current, {
        height: " 0%",
      });
    }
  }, [panelOpen]);

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://logospng.org/download/uber/logo-uber-4096.png"
        alt=""
      />
      <div className=" h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] relative bg-white p-6">
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-[10%] bg-gray-600 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg  w-full mt-5 "
              type="text"
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              placeholder="Add a pick-up loaction"
            />
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg  w-full mt-3 "
              type="text"
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              placeholder="Add a destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0] bg-red-500  "></div>
      </div>
    </div>
  );
};

export default Home;
