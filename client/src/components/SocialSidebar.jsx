import { FiX } from "react-icons/fi";

import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="absolute right-0 top-[25%] w-[50px] z-10 object-cover">
      <div className="shadow-md rounded-l-[12px] bg-white flex flex-col items-center">
        <button className="w-12 h-14 border-b border-gray-300 flex items-center justify-center text-[#d48238] text-4xl">
          <FiX />
        </button>

        <button className="w-12 h-14 border-b border-gray-300 flex items-center justify-center text-[#d48238] text-3xl">
          <FaFacebookF />
        </button>

        <button className="w-12 h-14 border-b border-gray-300 flex items-center justify-center text-[#d48238] text-3xl">
          <FaYoutube />
        </button>

        <button className="w-12 h-14 flex items-center justify-center text-[#d48238] text-3xl">
          <FaInstagram />
        </button>
      </div>
    </div>
  );
}
