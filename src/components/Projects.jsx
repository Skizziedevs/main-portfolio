import React from "react";
import passwordGenerator from "../assets/password generator.jpg";
import recipeBox from "../assets/Recipe.PNG";
import entertainment from "../assets/Entertainment.png";
import newsletter from "../assets/Newsletter.png";
import justin from "../assets/justin-hinh.PNG";
import advice from "../assets/advice-app.png";
import manage from "../assets/manage.png";
import multistepform from "../assets/multi-step-form.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="px-[22px] md:px-[40px] ipad:px-[24px] bg-black">
      <h1 className="text-white text-center text-[25px] md:text-[30px] pt-[50px] py-[40px]">
        My <span className="font-bold">Projects</span>
      </h1>
      <div className="pb-[50px] ipad:pb-[50px]">
        <div className="ipad:flex ipad:justify-around  items-center  pb-[55px]">
          <div>
            {" "}
            <img
              src={passwordGenerator}
              className="rounded-xl h-[250px]  omd:h-[290px] "
              alt=""
            />
          </div>

          <div className="text-white ipad:w-[320px] omd:w-[450px] md:w-[400px] omd:left-[-30px] md:mr-[20px] ipad:relative ipad:left-[10px] ">
            <h1 className=" text-[26px] font-bold py-[9px] omd:text-[30px]">
              01
            </h1>
            <h2 className="font-semibold text-[19px] omd:text-[22px] pb-[10px] ipad:pb-[8px]">
              Password Generator
            </h2>
            <p className="text-[14px] omd:text-[16px] text-gray-400 ">
              This web app generates secure passwords based on user-selected
              criteria, including uppercase letters, lowercase letters, symbols,
              and numbers. The intuitive interface allows users to customize the
              strength and complexity of their passwords, ensuring better online
              security. Built using Tailwind css and Vue js, this tool
              demonstrates my ability to create functional and user-friendly web
              applications focused on enhancing cybersecurity.
            </p>
            <a href="https://fortify-pass-generator.netlify.app">
              {" "}
              <FaExternalLinkAlt className="text-[18px] mt-[16px]" />
            </a>
          </div>
        </div>
        <div className=" reverse  items-center  ipad:justify-around ">
          <div>
            <img
              src={recipeBox}
              className="rounded-xl md:mr-[20px] w-[350px] ipad:w-[330px] omd:right-[33px]  omd:h-[290px] omd:w-[387px] h-[240px]"
              alt=""
            />
          </div>

          <div className="text-white ipad:w-[320px]  omd:w-[450px]  ">
            <h1 className=" text-[26px] font-bold py-[9px] omd:text-[30px]">
              02
            </h1>
            <h2 className="font-semibold text-[20px] omd:text-[22px] pb-[10px] ipad:pb-[8px]">
              Recipe Box
            </h2>
            <p className="text-[14px] omd:text-[16px] text-gray-400 ">
              Recipe Box is an interactive web app designed to display, manage,
              and customize a collection of recipes. The app fetches recipes and
              instructions from a JSON file, allowing users to easily view,
              edit, delete, and add new recipes. With a focus on dynamic content
              management, the application showcases my skills in working with
              JSON data, as well as implementing CRUD (Create, Read, Update,
              Delete) operations using React and Tailwind css.
            </p>
            <a href="https://recipe-ina-box.netlify.app">
              <FaExternalLinkAlt className="text-[18px] mt-[16px]" />
            </a>
          </div>
        </div>
        <div className="ipad:flex  items-center  ipad:justify-around pt-[50px] ">
          <div>
            {" "}
            <img
              src={justin}
              className="rounded-xl md:mr-[0px] w-[350px] ipad:w-[330px] omd:relative omd:right-[0px] omd:h-[290px] omd:w-[387px] h-[240px]"
              alt=""
            />
          </div>

          <div className="text-white ipad:w-[320px]  omd:w-[450px] md:w-[400px] omd:left-[-30px] md:mr-[20px] ipad:relative ipad:left-[10px] ">
            <h1 className=" text-[26px] font-bold py-[9px] omd:text-[30px]">
              03
            </h1>
            <h2 className="font-semibold text-[19px] omd:text-[22px] pb-[10px] ipad:pb-[8px]">
              Justin Hinh Portfolio
            </h2>
            <p className="text-[14px] omd:text-[16px] text-gray-400 ">
              Justin Hign Portfolio is a sleek and modern portfolio website
              developed as a test project during my internship. Built using
              Vue.js, this project demonstrates my skills in front-end
              development, including CSS styling and routing. The site features
              a well-structured layout and smooth navigation, highlighting my
              ability to create responsive and visually appealing web pages that
              effectively showcase content and design proficiency.
            </p>
            <FaExternalLinkAlt className="text-[18px] mt-[16px]" />
          </div>
        </div>
        <div className=" reverse  items-center ipad:justify-around pt-[50px] ">
          <div>
            <img
              src={multistepform}
              className="rounded-xl md:mr-[20px] w-[350px] ipad:w-[330px] omd:relative omd:right-[33px] omd:h-[290px] omd:w-[387px] h-[240px]"
              alt=""
            />
          </div>

          <div className="text-white ipad:w-[320px]  omd:w-[450px] ">
            <h1 className=" text-[26px] font-bold py-[9px] omd:text-[30px]">
              04
            </h1>
            <h2 className="font-semibold text-[20px] omd:text-[22px] pb-[10px] ipad:pb-[8px]">
              Multi Step Form
            </h2>
            <p className="text-[14px] omd:text-[16px] text-gray-400 ">
              The Multi-Step Form is a user-friendly, interactive form designed
              to guide users through a series of steps to complete their
              information. Built as a challenge from Frontend Mentor, this
              project showcases my JavaScript skills, focusing on managing state
              and navigation across multiple steps. The form features a clean
              and responsive design, with smooth transitions and validation to
              enhance the user experience.
            </p>
            <a href="https://multi-step-portfolio.netlify.app">
              <FaExternalLinkAlt className="text-[18px] mt-[16px]" />
            </a>
          </div>
        </div>
        <div className="ipad:flex  items-center  ipad:justify-around pt-[50px] ">
          <div>
            {" "}
            <img
              src={advice}
              className="rounded-xl bg-contain md:mr-[0px] w-[350px] ipad:w-[330px]  omd:right-[0px] omd:h-[290px] omd:w-[387px] h-[240px]"
              alt=""
            />
          </div>

          <div className="text-white ipad:w-[320px]  omd:w-[450px] md:w-[400px] omd:left-[-30px] md:mr-[20px] ipad:relative ipad:left-[10px] ">
            <h1 className=" text-[26px] font-bold py-[9px] omd:text-[30px]">
              05
            </h1>
            <h2 className="font-semibold text-[19px] omd:text-[22px] pb-[10px] ipad:pb-[8px]">
              Advice App
            </h2>
            <p className="text-[14px] omd:text-[16px] text-gray-400 ">
              The Advice App is a simple yet engaging web app that provides
              users with random pieces of advice. It fetches and displays advice
              from a public API, offering a fresh perspective with each click.
              The app highlights my ability to work with APIs and manage
              asynchronous data requests, while also demonstrating a clean and
              responsive user interface built with Vue js and Tailwind css.
            </p>
            <FaExternalLinkAlt className="text-[18px] mt-[16px]" />
          </div>
        </div>
        <div className=" reverse  items-center  ipad:justify-around pt-[50px] ">
          <div>
            <img
              src={manage}
              className="rounded-xl md:mr-[20px] w-[350px] ipad:w-[330px]  omd:right-[33px] omd:h-[290px] omd:w-[387px] h-[240px]"
              alt=""
            />
          </div>

          <div className="text-white ipad:w-[320px]  omd:w-[450px]   ipad:relative ">
            <h1 className=" text-[26px] font-bold py-[9px] omd:text-[30px]">
              06
            </h1>
            <h2 className="font-semibold text-[20px] omd:text-[22px] pb-[10px] ipad:pb-[8px]">
              Manage Website
            </h2>
            <p className="text-[14px] omd:text-[16px] text-gray-400 ">
              The Manage Website is a visually appealing, responsive web
              application built primarily using Tailwind CSS. This project
              emphasizes modern web design practices, showcasing a clean and
              structured layout that is both user-friendly and aesthetically
              pleasing. The site demonstrates my proficiency in CSS frameworks,
              particularly Tailwind, and my ability to create well-organized and
              maintainable front-end code.
            </p>
            <a href="https://pro-manage-portfolio.netlify.app">
              <FaExternalLinkAlt className="text-[18px] mt-[16px]" />
            </a>
          </div>
        </div>
        <div className="ipad:flex ipad:justify-around  items-center  pt-[50px] ">
          <div>
            {" "}
            <img
              src={newsletter}
              className="rounded-xl md:mr-[0px] w-[350px] ipad:w-[330px] omd:relative omd:right-[0px] omd:h-[290px] omd:w-[387px] h-[240px]"
              alt=""
            />
          </div>

          <div className="text-white ipad:w-[320px]  omd:w-[450px] md:w-[400px] omd:left-[-30px] md:mr-[20px] ipad:relative ipad:left-[10px] ">
            <h1 className=" text-[26px] font-bold py-[9px] omd:text-[30px]">
              07
            </h1>
            <h2 className="font-semibold text-[19px] omd:text-[22px] pb-[10px] ipad:pb-[8px]">
              Newsletter App
            </h2>
            <p className="text-[14px] omd:text-[16px] text-gray-400 ">
              The Newsletter App is a simple yet effective web application that
              allows users to subscribe to a newsletter by entering their email
              address. Built using an SMTP server, the app currently sends
              subscription confirmation and updates to a designated email
              address. While currently limited to sending emails to the account
              used to set up the server, the project demonstrates my skills in
              integrating email services, form validation, and building
              responsive user interfaces. This project can be scaled to handle
              broader email distribution with a premium SMTP service.
            </p>
            <a href="https://newsletter-portfolio.netlify.app">
              <FaExternalLinkAlt className="text-[18px] mt-[16px]" />
            </a>
          </div>
        </div>
        <div className=" reverse items-center ipad:justify-around pt-[50px] ">
          <div>
            <img
              src={entertainment}
              className="rounded-xl md:mr-[20px] ipad:my-[auto] w-[350px] ipad:w-[330px] omd:relative omd:right-[33px] omd:h-[290px] omd:w-[387px] h-[240px]"
              alt=""
            />
          </div>

          <div className="text-white ipad:w-[320px]  omd:w-[450px]   ipad:relative ">
            <h1 className=" text-[26px] font-bold py-[9px] omd:text-[30px]">
              08
            </h1>
            <h2 className="font-semibold text-[20px] omd:text-[22px] pb-[10px] ipad:pb-[8px]">
              Entertainment Hub
            </h2>
            <p className="text-[14px] omd:text-[16px] text-gray-400 ">
              Entertainment Hub is a feature-rich movie recommendation app that
              provides users with a personalized entertainment experience. The
              app includes a powerful search function, secure user
              authentication for login and signup, and seamless routing for
              smooth navigation. With state management integrated, the app
              maintains user preferences and ensures a dynamic, responsive
              interface. This project demonstrates my expertise in building
              scalable, interactive web applications with a strong focus on user
              experience and modern development practices.
            </p>
            <a href="">
              <FaExternalLinkAlt className="text-[18px] mt-[16px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
