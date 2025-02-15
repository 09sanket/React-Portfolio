import React from 'react'
import { FaInstagram , FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sanket Rahangdale</h3>
        <p className="text-lg font-normal text-gray-400">
          Mern stack developer & Mentor
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        "Passionate MERN Stack Developer & Mentor, building dynamic web applications with modern technologies. Guiding aspiring developers with hands-on learning and industry insights!"
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">7089890044</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">sanketrahangdale1118@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
  <a href="https://www.instagram.com/techno._skill?igsh=MXVjY2tjYzE3ZTRteQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="bannerIcon">
  <FaInstagram />
  </a>
  <a href="https://github.com/09sanket" target="_blank" rel="noopener noreferrer" className="bannerIcon">
    <FaTwitter />
  </a>
  <a href="https://www.linkedin.com/in/sanket-rahangdale708989/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
    <FaLinkedinIn />
  </a>
</div>

      </div>
    </div>
  );
}

export default ContactLeft