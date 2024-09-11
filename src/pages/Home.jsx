import React from "react";
import Icon from "../assets/hero.svg";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import Form from "../components/Form"
import {
      FaFacebook,
  
      FaReddit,
      FaLinkedin,
      FaTwitter,
      FaJsSquare,
      FaGitAlt,
      FaVuejs,
      FaReact,
      FaBootstrap,
      FaHtml5,
     
    } from "react-icons/fa";
    import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
const Home = () => {
  return (
    <div>
      <div className="flex flex-col-reverse ipad:flex-row ipad:pt-[35px] px-[22px] ld:px-[130px] md:px-[50px] omd:px-[90px] ipad:px-[24px]">
        <div>
          <h1 className="text-[25px] md:text-[32px] omd:text-[35px] pb-[3px]">
            Hello, Im <span className="font-bold ">Onwura Kingsley.</span>
          </h1>
          <h1 className="font-bold text-[25px] md:text-[32px] omd:text-[35px] pb-[3px]">
            Front-end <span>developer</span>
          </h1>
          <h1 className="text-[25px] md:text-[32px] omd:text-[35px] xsmas:text-[28px]">
            Based in <span className="font-bold">Nigeria</span>
          </h1>
          <p className="text-[14px] md:text-[16px] omd:text-[17px] text-gray-900  pt-[20px] ipad:w-[350px] md:w-[450px] omd:w-[520px]">
            Passionate about turning innovative ideas into visually stunning and
            highly functional digital experiences. With a keen eye for design and
            dedication to excellence, I create bespoke solutions that not only
            meet but exceed client expectations. Explore my portfolio to see how
            I blend creativity and technical expertise to bring visions to life.
          </p>
          <div className="flex space-x-[10px] pt-[19px] omd:pt-[25px]">
            <div className="w-[40px] cursor-pointer hover:bg-black hover:text-white border-[2px] px-[10px] py-[10px] rounded-md border-black">
              <FaFacebook className="text-[18px] " />
            </div>
            <div className="w-[40px] cursor-pointer  hover:bg-black hover:text-white border-[2px] px-[10px] py-[10px] rounded-md border-black">
              <FaReddit className="text-[18px]" />
            </div>
            <div className="w-[40px] cursor-pointer  hover:bg-black hover:text-white border-[2px] px-[10px] py-[10px] rounded-md border-black">
              <FaTwitter className="text-[18px]" />
            </div>
            <div className="w-[40px] cursor-pointer  hover:bg-black hover:text-white border-[2px] px-[10px] py-[10px] rounded-md border-black">
              <FaLinkedin className="text-[18px]" />
            </div>
          </div>
        </div>
        <div>
          <img src={Icon} className="h-[300px] w-[auto] ipad:h-[400px] omd:left-[30px] ipad:relative ipad:bottom-[30px]  pb-[10px]" alt="Icon" />
        </div>
      </div>
      <div id="sec2" className="pt-[70px] ipad:pt-[20px] md:pt-[50px] md:pb-[45px] ld:px-[130px] px-[22px] omd:px-[90px] md:px-[50px] pb-[35px]">
        <h1 className="text-center text-[27px] md:text-[32px] pb-[40px]">
          My <span className="font-bold">Skills</span>
        </h1>

        <div className="grid grid-cols-2 justify-items-center ipad:grid-cols-4 gap-y-[20px] ipad:gap-y-[40px] gap-x-[20px]">
          <div className="w-[160px] cursor-pointer  hover:bg-black hover:text-white border-[2px] py-[23px] border-black">
            <FaJsSquare className="text-[44px] mx-auto" />
            <h2 className="text-center font-semibold pt-[14px]">JavaScript</h2>
          </div>
          <div className="w-[160px] cursor-pointer  hover:bg-black hover:text-white border-[2px] py-[23px] border-black">
            <FaGitAlt className="text-[44px] mx-auto" />
            <h2 className="text-center font-semibold pt-[14px]">Git</h2>
          </div>
          <div className="w-[160px] cursor-pointer  hover:bg-black hover:text-white border-[2px] py-[23px] border-black">
            <FaVuejs className="text-[44px] mx-auto" />
            <h2 className="text-center font-semibold pt-[14px]">Vue JS</h2>
          </div>
          <div className="w-[160px] cursor-pointer  hover:bg-black hover:text-white border-[2px] py-[23px] border-black">
            <FaReact className="text-[44px] mx-auto" />
            <h2 className="text-center font-semibold pt-[14px]">React JS</h2>
          </div>
          <div className="w-[160px] cursor-pointer  hover:bg-black hover:text-white border-[2px] py-[23px] border-black">
            <FaBootstrap className="text-[44px] mx-auto" />
            <h2 className="text-center font-semibold pt-[14px]">Bootstrap</h2>
          </div>
          <div className="w-[160px] cursor-pointer  hover:bg-black hover:text-white border-[2px] py-[23px] border-black">
            <RiTailwindCssFill className="text-[44px] mx-auto" />
            <h2 className="text-center font-semibold pt-[14px]">Tailwind</h2>
          </div>
          <div className="w-[160px] cursor-pointer  hover:bg-black hover:text-white border-[2px] py-[23px] border-black">
            <FaHtml5 className="text-[44px] mx-auto" />
            <h2 className="text-center font-semibold pt-[14px]">HTML5</h2>
          </div>
          <div id="section3" className="w-[160px] cursor-pointer hover:bg-black hover:text-white border-[2px] py-[23px] border-black">
            <RiNextjsFill className="text-[44px] mx-auto" />
            <h2 className="text-center font-semibold pt-[14px]">Next JS</h2>
          </div>
          
        </div>
      </div>
      <div  id="sec3"><Experience  /></div>
      
      <div id="sec4">
        <AboutMe />
      </div>
      
      <div  id="sec5">
        <Projects />
      </div>
      
      <Testimonials />
      <div  id="sec6"><Form /></div>
     
      
    </div>
  );
};

export default Home;
