
import React from "react";
import aboutimg from "../assets/about.PNG";

const AboutMe = () => {
  return (
    <div className="px-[22px] ld:px-[130px] items-center py-[30px] omd:px-[90px] md:px-[50px] ipad:py-[37px]">
      <div className="ipad:flex pb-[35px]">
        <img src={aboutimg} alt="" className="h-[300px] omd:relative omd:top-[30px] omd md:w-[340px] omd:h-[330px] omd:w-[374px] w-auto mx-auto" />
        <div className="md:pl-[35px] omd:pl-[45px] pt-[20px] ipad:pt-[0px] md:pt-[20px]"> <h2 className="text-[25px] md:text-[30px]">About <span className="font-bold">Me</span></h2>
        <p className="text-[14px] omd:text-[19.4px] md:text-[15px]  omd:pr-[30px] text-gray-900 pt-[20px]  ipad:pt-[12px]">
          Hello! Im Onwura Kingsley, a passionate and dedicated Frontend
          Developer with over 3 years of experience in creating stunning,
          user-centric web applications. I specialize in translating design
          concepts into fully functional, responsive websites using modern
          technologies and best practices.
        </p>
        <p className="text-[14px] omd:text-[19.4px] md:text-[15px]  omd:pr-[30px] text-gray-900 pt-[20px] ipad:pt-[12px]">
          I began my journey as a web developer in 2020. And since then ive
          continued to grow and evolve as a developer, Taking on new challenges
          and learning the latest technologies along the way. Now , 4 years
          afteer starting my web development journey, i am building cutting edge
          web applications using modern technologies such as, next js,
          typescript and tailwind css.
        </p></div>
       
      </div>
    </div>
  );
};

export default AboutMe;
