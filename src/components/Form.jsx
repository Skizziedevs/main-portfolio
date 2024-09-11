import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaFacebook, FaReddit, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4wzfg05",
        "template_xr23blq",
        form.current,
        "lpaAJO0DepRbSeTkZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form
        className=" px-[22px] ld:px-[130px] md:px-[50px] omd:px-[90px]"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="email"
          className="border-[2px] border-black mb-[15px] h-[60px] px-[20px] placeholder:text-gray-800 w-full rounded-md"
          name="email"
          placeholder="Email"
        />
        <input
          type="url"
          className="border-[2px] border-black mb-[15px] h-[60px] px-[20px] placeholder:text-gray-800 w-full rounded-md"
          name="website"
          placeholder="website url (Optional)"
        />
        <input
          type="number"
          className="border-[2px] border-black mb-[15px] h-[60px] px-[20px] placeholder:text-gray-800 w-full rounded-md"
          name="number"
          placeholder="Phone number"
        />

        <textarea
          className="border-[2px] border-black mb-[15px] h-[130px] pt-[15px] px-[20px] pb-[0px]   placeholder:text-gray-800 w-full rounded-md"
          placeholder="How can i help ?"
          name="message"
        />
        <input type="submit" className="cta-button bg-black text-white font-semibold rounded-md px-4 py-2 text-lg" value="Get In Touch" />
      </form>

      <div className="flex space-x-[10px] ld:px-[130px] px-[22px] md:px-[50px] omd:px-[90px] pt-[19px]">
        <div className="w-[40px] cursor-pointer  hover:bg-black hover:text-white border-[2px] px-[10px] py-[10px] rounded-md border-black">
          <FaFacebook className="text-[18px]" />
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
      <div className=" pt-[30px] px-[22px] pb-[40px]">
        <div className="ipad:hidden">
          <h2 className="text-[24px] w-[230px] font-bold">
            Let us talk for something special.
          </h2>
          <h3 className="text-[17px] font-semibold">kmblak8@gmail.com</h3>
          <h3 className="text-[17px] font-semibold pt-[3px]">+2348080836470</h3>
        </div>
      </div>

      <div className="bg-black ">
        <div className="text-xl  text-white font-bold ">
          <h2 className="py-[20px] pl-[22px] ld:px-[130px] md:px-[50px] omd:px-[90px]">
            Skizzie Devs
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Form;
