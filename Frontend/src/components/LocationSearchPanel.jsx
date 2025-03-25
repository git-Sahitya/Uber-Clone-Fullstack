import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
  // sample array for locations

  const loactions = [
    "B 46/142, Mahamanapuri Colony , BHU ,Varanasi",
    "A 47/140, GandhiNagar Colony , BHU ,Varanasi",
    "12B, Santipuram , phaphamau , Prayagraj",
    "Lahartara Varanasi",
  ];

  return (
    <div>
      {/* This is just a sample data */}

      {loactions.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex items-center border-1 p-2  border-gray-200 active:border-black rounded-lg gap-2 justify-start"
          >
            <h2 className=" bg-[#eee] h-7 w-8 flex items-center justify-center  rounded-full">
              <i className="ri-map-pin-2-line "></i>
            </h2>
            <h4 className="font-normal">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
