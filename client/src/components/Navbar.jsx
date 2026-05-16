import { FiSearch } from "react-icons/fi";
import { HiOutlineLanguage } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SocialSidebar from "./SocialSidebar";

export default function Navbar() {
  return (
    <header className="bg-[#f5f5f5] border-b border-gray-200">
      <div className="max-w-[1500px] mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
              className="w-10"
            />

            <div>
              <h2 className="font-bold text-[18px] leading-7 uppercase">
                Government of India
              </h2>

              <p className="font-bold text-[16px] uppercase">
                Department of Rural Development
              </p>
            </div>
          </div>

          <div className="w-[1px] h-20 bg-gray-300"></div>

          <img src="./src/assets/PMAYG-3.jpg" className="w-20" />
        </div>

        <div className="flex items-center gap-8">
          <img src="./src/assets/image-35.jpg" className="w-20" />
          <FiSearch className="text-2xl text-gray-600" />

          <HiOutlineLanguage className="text-2xl text-orange-500" />

          <span className="text-1xl">Eng</span>

          <img src="./src/assets/Vector.jpg" className="w-5" />

          <Link
            to="/login"
            className="bg-[#db8a32] text-white px-10 py-4 rounded-full font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
