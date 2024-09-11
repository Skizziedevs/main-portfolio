import React from "react";
import aboutimg from "../assets/about.PNG";
import frances from "../assets/Frances.jpg";

const Testimonials = () => {
  return (
    <div className="px-[22px] omd:px-[90px] ipad:px-[24px] bg-white">
      <h1 className="text-center text-[27px] py-[40px]">
        My <span className="font-bold">Testimonials</span>
      </h1>

      <div className="space-y-[34px] ipad:flex ipad:justify-between pb-[40px]">
        <div className="w-[280px] mx-auto ipad:hidden shadow-2xl bg-white rounded-xl  ">
          
        </div>
        <div className="w-[280px]  h-[370px] mx-auto  shadow-2xl bg-black rounded-xl ">
          <div className="py-[18px]">
            <img
              src={frances}
              className="w-[60px]  h-[60px] rounded-full mx-auto"
              alt="About me image"
            />
            <p className="text-white pt-[16px] pb-[5px] text-center font-thin text-[14px] mx-auto w-[250px]">
             
              I've had the pleasure of watching Kingsley grow into an outstanding
              developer. His tenacity and the energy he brings to every project
              are truly impressive. If youre looking for a developer to scale,
              build, or enhance your software, I highly recommend him. Hes
              someone who will bring real value to your team.
            </p>
            <div className="h-[2px] my-[12px] w-[100px] mx-auto bg-white"></div>
            <h3 className="font-bold text-[15px] text-white text-center">
              Frances Chiamaka
            </h3>
            <h4 className="text-[14px] text-white pt-[8px] text-center">
              Designer
            </h4>
          </div>
        </div>

        <div className="w-[280px] mx-auto  shadow-2xl bg-white rounded-xl  ">
          <div className="py-[18px]">
            <img
              src={aboutimg}
              className="w-[60px]  h-[60px] rounded-full mx-auto"
              alt="About me image"
            />
            <p className="text-gray-800 pt-[16px] pb-[5px] text-center font-thin text-[14px] mx-auto w-[250px]">
              Kingsley is an exceptional developer who consistently goes above
              and beyond to deliver top-notch work. His passion for coding and
              ability to adapt to new challenges make him stand out. He’s great
              at taking ownership of his tasks and working collaboratively to
              achieve team goals. I highly recommend Kingsley to anyone looking
              to enhance their development team with a talented and driven
              individual.
            </p>
            <div className="h-[2px] my-[12px] w-[100px] mx-auto bg-gray-800"></div>
            <h3 className="font-bold text-[15px] text-gray-800 text-center">
              0dumz
            </h3>
            <h4 className="text-[14px] text-gray-800 pt-[8px] text-center">
              C.E.O GriffinTech
            </h4>
          </div>
        </div>
        <div className="w-[280px] h-[410px] mx-auto hidden md:flex shadow-2xl bg-black rounded-xl ">
          <div className="py-[18px] ml-[14px]">
            <img
              src={aboutimg}
              className="w-[60px]  h-[60px] rounded-full mx-auto"
              alt="About me image"
            />
            <p className="text-white pt-[16px]  pb-[5px] text-center font-thin text-[14px] mx-auto w-[250px]">
              I've had the opportunity to collaborate with Kingsley on several
              projects, and his dedication and expertise never fail to impress.
              He approaches every challenge with a problem-solving mindset and
              delivers exceptional results. If youre in search of a developer
              who is both skilled and reliable, Kingsley is the perfect choice.
              Hes a great addition to any team and always adds immense value.
            </p>
            <div className="h-[2px] my-[12px] w-[100px] mx-auto bg-white"></div>
            <h3 className="font-bold text-[15px] text-white text-center">
              Evan Shaun
            </h3>
            <h4 className="text-[14px] text-white pt-[8px] text-center">
              Designer
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
