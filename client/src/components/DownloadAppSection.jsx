import mobileImage from "@assets/images/downloadcradImage.svg";
import houseIcon from "@assets/icons/house.svg";
import loginIcon from "@assets/icons/login.svg";
import allocationIcon from "@assets/icons/allocation.svg";
import immigrationIcon from "@assets/icons/immigration.svg";

export default function DownloadAppSection() {
  return (
    <section className="py-32 overflow-hidden">
      <div className="relative max-w-[1280px] h-[550px] mx-auto">
        {/* TOP HEADING */}
        <div className="text-center">
          <p className="text-[17px] text-black">Ready to Get Your House?</p>

          <h2 className="text-[30px] leading-[1.4] font-medium mt-5 text-black">
            Download the Awaas App Now &
            <br />
            Get Registered
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-2  gap-20 items-center mt-2">
          {/* LEFT IMAGE */}
          <div className="flex justify-center left-[158px] w-[493.42572021484375px] top-[215px] h-[551px]">
            <img src={mobileImage} alt="mobile" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-[544] h-[320] top-[246px] left-[631px] gap-[32px]">
            {/* FEATURES */}
            <div className="grid grid-cols-2  gap-x-5 gap-y-5">
              {/* ITEM */}
              <div className="w-[264] h-[144] gap-[4px]">
                <img
                  src={houseIcon}
                  alt="house"
                  className="bg-[#f5f5f5] w-[44px] h-[44px]"
                />
                <h3 className="text-[18px] font-medium mt-4 text-black">
                  Track Your House Progress
                </h3>

                <p className="text-[16px] leading-[28px] text-[#646b7c] mt-2">
                  Enim urna consequat pellentesque urna adipiscing lacus
                  dictumst velit sed.
                </p>
              </div>

              {/* ITEM */}
              <div className="w-[264] h-[144] gap-[4px]">
                <img
                  src={loginIcon}
                  alt="login"
                  className="w-[44px] h-[44px]"
                />

                <h3 className="text-[18px] font-medium mt-4 text-black">
                  Simple Login System
                </h3>

                <p className="text-[16px] leading-[28px] text-[#646b7c] mt-2">
                  Enim urna consequat pellentesque urna adipiscing lacus
                  dictumst velit sed.
                </p>
              </div>

              {/* ITEM */}
              <div className="w-[264] h-[144] gap-[4px]">
                <img
                  src={allocationIcon}
                  alt="allocation"
                  className="w-[44px] h-[44px]"
                />

                <h3 className="text-[18px] font-medium mt-4 text-black">
                  Registration Made Easy
                </h3>

                <p className="text-[16px] leading-[28px] text-[#646b7c] mt-2">
                  Enim urna consequat pellentesque urna adipiscing lacus
                  dictumst velit sed.
                </p>
              </div>

              {/* ITEM */}
              <div className="w-[264] h-[144] gap-[4px]">
                <img
                  src={immigrationIcon}
                  alt="allocation"
                  className="w-[44px] h-[44px]"
                />

                <h3 className="text-[18px] font-medium mt-4 text-black">
                  Quick Verification
                </h3>

                <p className="text-[16px] leading-[28px] text-[#646b7c] mt-2">
                  Enim urna consequat pellentesque urna adipiscing lacus
                  dictumst velit sed.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button
              className="
                  w-[264px]
                  h-[52px]
                  mt-10
                  border-2
                  border-[#d78c47]
                  rounded-[200px]
                  px-[20px]
                  py-[16px]
                  flex
                  items-center
                  justify-center
                  gap-[8px]
                  text-[#d78c47]
                  text-[15px]
                  leading-[20px]
                  font-semibold
                  hover:bg-[#d78c47]
                  hover:text-white
                  transition-all
                  duration-300
                "
            >
              Download Awaas App Now
              <span>≫</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
