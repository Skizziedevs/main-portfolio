import React from "react";

const Experience = () => {
  return (
    <div className="bg-black px-[22px] ld:px-[130px]  omd:px-[90px] md:px-[50px] ipad:px-[24px] text-gray-300">
      <h2 className=" text-[25px] text-center md:text-[32px] md:py-[50px] py-[40px]">
        My <span className="font-bold">Experience</span>
      </h2>
      <div className="space-y-[25px] pb-[50px]">
        <div className="border-[2px] border-gray-500 px-[17px] ipad:px-[22px] ipad:py-[12px] rounded-md">
          <div className="ipad:flex ipad:justify-between">
            <div className="text-white flex text-[21px] py-[15px] ipad:pb-[2px] ">
              <h1 className="text-white pt-[9px] ipad:pt-[0px]  text-[29px] ipad:relative ipad:bottom-[6px] font-bold ">
                GT
              </h1>
              <h2 className="pl-[25px] omd:text-[23px]  font-semibold">
                Junior Frontend Developer At Griffintech
              </h2>
            </div>
            <h4 className="font-semibold text-gray-300 text-[16.5px] pb-[12px] ipad:pt-[18px]">
              June 2023 - October 2023{" "}
            </h4>
          </div>

          <p className="text-gray-300 omd:text-[19.4px] pb-[18px]">
            {" "}
            As a Front-End Development Intern at GriffinTech, I worked
            closely with the development team to build and enhance user
            interfaces for several key projects. My role involved collaborating
            on design implementations and ensuring a seamless user experience
            across various platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
