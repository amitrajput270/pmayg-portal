import { FiChevronDown, FiSearch } from "react-icons/fi";
import { HiOutlineLanguage } from "react-icons/hi2";
import { Link } from "react-router-dom";
import emblem_of_India from "@assets/images/emblem_of_India.svg";
import logo from "@assets/images/logo.svg";
import cleanIndiaIcon from "@assets/images/image-35.svg";
import accessBilityIcon from "@assets/icons/accessbility-vector.svg";

export default function Navbar() {
  return (
    <header>
      <div className="max-w-[1500px] mx-auto px-8 py-1 mt-3 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <img src={emblem_of_India} className="w-[27px] h-[45px]" />
            <Link to="/" className="flex flex-col items-start gap-1">
              <div>
                <h2 className="font-semimedium text-[13px] leading-7 uppercase">
                  Government of India
                </h2>

                <p className="font-medium text-[13px] uppercase">
                  Department of Rural Development
                </p>
              </div>
            </Link>
          </div>

          <div className="w-[1px] h-12 bg-gray-400"></div>
          <img src={logo} className="w-25 h-10" />
        </div>

        <div className="flex items-center gap-8">
          <img src={cleanIndiaIcon} className="w-30" />
          <FiSearch className="text-2xl text-gray-600" />
          <div className="w-[1px] h-12 bg-gray-400"></div>
          <HiOutlineLanguage className="text-2xl text-orange-500" />
          <span className="text-1xl">Eng</span>
          <div className="w-[1px] h-12 bg-gray-400"></div>
          <img src={accessBilityIcon} className="w-5 color-[#DF5700]" />
          <Link
            to="/login"
            className="bg-[#db8a32] text-white px-5 py-3 rounded-full font-medium"
          >
            Login
            <FiChevronDown className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </header>
  );
}
