import mainPageBg from "../assets/main-page-image.svg";
import beneficiaryBg from "../assets/main-page-image-2.svg";

import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
import SocialSidebar from "./SocialSidebar";
import { useNavigate } from "react-router-dom";

export default function ManiSection() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full bg-[#f5f5f5] mt-3 overflow-hidden">
      {/* HERO IMAGE */}
      <div
        className="relative w-full h-[473px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${mainPageBg})`,
        }}
      >
        {/* CONTENT */}
        <div className="max-w-[1280px] mx-auto px-6 pt-[70px] text-center">
          {/* TITLE */}
          <h1 className="text-white font-['Roboto_Slab'] font-semibold text-[64px] leading-[74px]">
            Pradhan Mantri Awaas Yojana- Gramin
          </h1>

          {/* DESCRIPTION */}
          <p className="max-w-[980px] mx-auto mt-8 text-white text-[22px] leading-[42px] font-light">
            The Pradhan Mantri Awas Yojana Gramin (PMAY-G) is a government
            initiative aimed at providing affordable housing to the rural poor,
            ensuring that families living in kutcha houses or without shelter
            can move into permanent homes with essential amenities.
          </p>
        </div>

        {/* SOCIAL SIDEBAR */}
        <SocialSidebar />
      </div>

      {/* CARD SECTION */}
      <div className="relative max-w-[744px] mx-auto -mt-[112px] z-20 flex">
        {/* LEFT CARD */}
        <div
          className="relative w-[372px] h-[328px] overflow-hidden"
          style={{
            backgroundImage: `url(${beneficiaryBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center text-center px-8 pt-6">
            <h2 className="font-['Roboto_Slab'] font-medium text-[24px] leading-[32px] tracking-[0.02em] text-white">
              CITIZEN/
              <br />
              BENEFICIARY
            </h2>

            {/* LINE */}
            <div className="w-[40px] border border-white mt-4"></div>

            {/* TEXT */}
            <p className="mt-6 text-white text-[16px] leading-[24px] tracking-[0.02em] font-['Roboto_Slab']">
              Lorem ipsum dolor sit amet consectetur. Consectetur hac pretium
              tincidunt velit turpis malesuada eu augue platea. Morbi massa
              libero pulvinar elit.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/citizen-beneficiary")}
              className="mt-8 border border-white rounded-[7px] px-5 py-2 flex items-center gap-3 text-white font-medium text-[16px] font-['Roboto_Slab'] hover:bg-white hover:text-[#f68920] transition"
            >
              Click Here
              <HiArrowRight className="text-[24px]" />
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="w-[372px] h-[328px] bg-[#18689E] flex flex-col items-center text-center px-8 pt-10">
          {/* TITLE */}
          <h2 className="font-['Roboto_Slab'] font-medium text-[24px] leading-[32px] tracking-[0.02em] text-white">
            For Officials of PMAY-G
          </h2>

          {/* LINE */}
          <div className="w-[40px] border border-white mt-4"></div>

          {/* TEXT */}
          <p className="mt-6 text-white text-[16px] leading-[24px] tracking-[0.02em] font-['Roboto_Slab'] max-w-[308px]">
            Lorem ipsum dolor sit amet consectetur. Consectetur hac pretium
            tincidunt velit turpis malesuada eu augue platea. Morbi massa libero
            pulvinar elit.
          </p>

          {/* BUTTON */}
          <button className="mt-9 border border-white rounded-[7px] px-5 py-2 flex items-center gap-3 text-white font-medium text-[16px] font-['Roboto_Slab'] hover:bg-white hover:text-[#18689E] transition">
            Click Here
            <HiArrowRight className="text-[24px]" />
          </button>
        </div>
      </div>

      {/* EXTRA SPACE */}
      <div className="h-[120px]"></div>
    </section>
  );
}
