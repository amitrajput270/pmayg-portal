import { FiX } from "react-icons/fi";

import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="fixed right-10 top-[35%] z-50 object-cover">
      <div className="bg-[#e5e7eb] shadow-md">
        <button className="w-16 h-16 border-b border-gray-300 flex items-center justify-center text-[#d48238] text-4xl">
          <FiX />
        </button>

        <button className="w-16 h-16 border-b border-gray-300 flex items-center justify-center text-[#d48238] text-3xl">
          <FaFacebookF />
        </button>

        <button className="w-16 h-16 border-b border-gray-300 flex items-center justify-center text-[#d48238] text-3xl">
          <FaYoutube />
        </button>

        <button className="w-16 h-16 flex items-center justify-center text-[#d48238] text-3xl">
          <FaInstagram />
        </button>
      </div>
    </div>
  );
}
