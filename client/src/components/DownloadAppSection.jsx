import mobileImage from "../assets/mockuuups-female-hand-holding-iphone-14-pro-mockup 2.jpg";
import houseIcon from "../assets/icons/house.jpg";
import loginIcon from "../assets/icons/login.jpg";
import allocationIcon from "../assets/icons/allocation.jpg";
import immigrationIcon from "../assets/icons/immigration.jpg";

import { FaHouseUser } from "react-icons/fa6";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaUserCheck } from "react-icons/fa";

export default function DownloadAppSection() {
  return (
    <section className="py-32 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-8">
        {/* TOP HEADING */}
        <div className="text-center">
          <p className="text-[22px] text-black">Ready to Get Your House?</p>

          <h2 className="text-[64px] leading-[85px] font-bold mt-5">
            Download the Awaas App Now &
            <br />
            Get Registered
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-2  gap-20 items-center mt-24">
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={mobileImage}
              alt="mobile"
              className="w-full max-w-[600px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* FEATURES */}
            <div className="grid grid-cols-2  gap-x-20 gap-y-20">
              {/* ITEM */}
              <div>
                <img
                  src={houseIcon}
                  alt="house"
                  className="w-[55px] h-[55px]"
                />
                <h3 className="text-[24px] font-bold mt-5">
                  Track Your House Progress
                </h3>

                <p className="text-[18px] leading-[38px] text-[#646b7c] mt-5">
                  Enim urna consequat pellentesque urna adipiscing lacus
                  dictumst velit sed.
                </p>
              </div>

              {/* ITEM */}
              <div>
                <img
                  src={loginIcon}
                  alt="login"
                  className="w-[55px] h-[55px]"
                />

                <h3 className="text-[24px] font-bold mt-5">
                  Simple Login System
                </h3>

                <p className="text-[18px] leading-[38px] text-[#646b7c] mt-5">
                  Enim urna consequat pellentesque urna adipiscing lacus
                  dictumst velit sed.
                </p>
              </div>

              {/* ITEM */}
              <div>
                <img
                  src={allocationIcon}
                  alt="allocation"
                  className="w-[55px] h-[55px]"
                />

                <h3 className="text-[24px] font-bold mt-5">
                  Registration Made Easy
                </h3>

                <p className="text-[18px] leading-[38px] text-[#646b7c] mt-5">
                  Enim urna consequat pellentesque urna adipiscing lacus
                  dictumst velit sed.
                </p>
              </div>

              {/* ITEM */}
              <div>
                <img
                  src={immigrationIcon}
                  alt="allocation"
                  className="w-[55px] h-[55px]"
                />

                <h3 className="text-[24px] font-bold mt-5">
                  Quick Verification
                </h3>

                <p className="text-[18px] leading-[38px] text-[#646b7c] mt-5">
                  Enim urna consequat pellentesque urna adipiscing lacus
                  dictumst velit sed.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button className="mt-24 border-2 border-[#d78c47] rounded-full px-14 py-6 text-[#d78c47] text-[28px] font-semibold hover:bg-[#d78c47] hover:text-white transition">
              Download Awaas App Now ≫
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
