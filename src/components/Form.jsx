import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Form = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  // Regular expression patterns for validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10,15}$/;

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", phone: "", message: "" };

    // Validate email
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Validate phone number
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      valid = false;
    }

    // Validate message
    if (formData.message.trim() === "") {
      newErrors.message = "Message cannot be empty";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop submission if the form is invalid

    setLoading(true);
    setIsSent(false);
    setError(false);

    emailjs
      .sendForm(
        "service_4wzfg05",
        "template_xr23blq",
        form.current,
        "lpaAJO0DepRbSeTkZ"
      )
      .then(
        () => {
          // Remove unused 'result'
          setLoading(false);
          setIsSent(true);
          form.current.reset();
          setFormData({ email: "", phone: "", website: "", message: "" }); // Clear form data state
          setTimeout(() => setIsSent(false), 3000);
        },
        () => {
          // Remove unused 'error'
          setLoading(false);
          setError(true);
        }
      );
  };

  // Update form state on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form
        className="px-[22px] ld:px-[130px] md:px-[50px] omd:px-[90px]"
        ref={form}
        onSubmit={sendEmail}
      >
        {/* Email Input */}
        <input
          type="text"
          name="email"
          placeholder="Email"
          className={`border-[2px] ${
            errors.email ? "border-red-500" : "border-black"
          } mb-[15px] h-[60px] px-[20px] placeholder:text-gray-800 w-full rounded-md`}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-500 relative bottom-[0.8rem] text-sm">
            {errors.email}
          </p>
        )}

        {/* Website Input */}
        <input
          type="url"
          name="website"
          placeholder="Website URL ( e.g: https://website.com) (Optional)"
          className="border-[2px] border-black mb-[15px] h-[60px] px-[20px] placeholder:text-gray-800 w-full rounded-md"
          value={formData.website}
          onChange={handleChange}
        />

        {/* Phone Number Input */}
        <input
          type="number"
          name="phone"
          placeholder="Phone number"
          className={`border-[2px] ${
            errors.phone ? "border-red-500" : "border-black"
          } mb-[15px] h-[60px] px-[20px] placeholder:text-gray-800 w-full rounded-md`}
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm relative bottom-[0.8rem]">
            {errors.phone}
          </p>
        )}

        {/* Message Textarea */}
        <textarea
          name="message"
          placeholder="How can I help?"
          className={`border-[2px] ${
            errors.message ? "border-red-500" : "border-black"
          } mb-[15px] h-[130px] pt-[15px] px-[20px] pb-[0px] placeholder:text-gray-800 w-full rounded-md`}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="text-red-500 relative bottom-[1.2rem] text-sm">
            {errors.message}
          </p>
        )}

        {/* Submit Button */}
        <input
          type="submit"
          className="cta-button bg-black text-white font-semibold rounded-md px-4 py-2 text-lg"
          value={
            loading ? "Sending..." : isSent ? "Message Sent!" : "Get In Touch"
          }
          disabled={loading}
        />

        {/* Success Message */}
        {isSent && (
          <p className="text-green-500 mt-2">
            Your message has been sent successfully!
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-500 mt-2">
            There was an error sending your message. Please try again.
          </p>
        )}
      </form>
      {/* Social Media Icons */}
      <div className="flex space-x-[10px] ld:px-[130px] px-[22px] md:px-[50px] omd:px-[90px] pt-[19px]">
        <div className="w-[40px] cursor-pointer hover:bg-black hover:text-white border-[2px] px-[10px] py-[10px] rounded-md border-black">
          <FaFacebook className="text-[18px]" />
        </div>
        <div className="w-[40px] cursor-pointer hover:bg-black hover:text-white border-[2px] px-[10px] py-[10px] rounded-md border-black">
          <a href="https://github.com/skizziedevs">
            <FaGithub className="text-[18px]" />
          </a>
        </div>
        <div className="w-[40px] cursor-pointer hover:bg-black hover:text-white border-[2px] px-[10px] py-[10px] rounded-md border-black">
          <a href="https://x.com/KMB_offish?t=sHpNJdwg29ltzrA732Sndw&s=09">
            <FaTwitter className="text-[18px]" />
          </a>
        </div>
        <div className="w-[40px] cursor-pointer hover:bg-black hover:text-white border-[2px] px-[10px] py-[10px] rounded-md border-black">
          <a
            href="https://www.linkedin.com/in/kingsley-onwura-895a28269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
          >
            <FaLinkedin className="text-[18px]" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-[30px] px-[22px] pb-[40px]">
        <div className="ipad:hidden">
          <h2 className="text-[24px] w-[230px] font-bold">
            Let us talk for something special.
          </h2>
          <h3 className="text-[17px] font-semibold">kmblak8@gmail.com</h3>
          <h3 className="text-[17px] font-semibold pt-[3px]">+2348080836470</h3>
        </div>
      </div>

      <div className="bg-black">
        <div className="text-xl text-white font-bold">
          <h2 className="py-[20px] pl-[22px] cursor-default ld:px-[130px] md:px-[50px] omd:px-[90px]">
            Skizzie Devs
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Form;
