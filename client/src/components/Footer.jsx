import logo from "../assets/logo.svg";
import nicLogo from "../assets/nic-logo.png";

import googlePlay from "../assets/google-play.svg";
import appStore from "../assets/app-store.svg";

import htmlLogo from "../assets/html-logo.svg";
import cssLogo from "../assets/css-logo.svg";

import digitalIndia from "../assets/digital-india.svg";
import myGov from "../assets/mygov.svg";
import indiaGov from "../assets/india-gov.svg";
import makeIndia from "../assets/make-india.svg";
import gazette from "../assets/gazette.svg";
import ngsp from "../assets/ngsp.svg";

import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    "About Us",
    "Contact Us",
    "Screen Reading",
    "Accessibility Statement",
    "Frequently Asked Questions",
    "Terms & Conditions",
  ];

  const usefulLinks = [digitalIndia, indiaGov, myGov, makeIndia, gazette, ngsp];

  return (
    <footer className="bg-[#F5F5F5] mt-[50px]">
      {/* TOP FOOTER */}
      <div className="max-w-[1700px] mx-auto px-[50px] pt-[60px] pb-[55px]">
        <div className="grid grid-cols-[220px_1fr_180px] gap-[70px]">
          {/* LEFT LOGO */}
          <div>
            <img
              src={logo}
              alt="PMAYG Logo"
              className="w-[159px] h-[78px] top-[61px] left-[50px]"
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="flex gap-[78px] h-[248px] top-[20px] left-[341px]">
            {/* QUICK LINKS */}
            <div>
              <h3 className="text-[16px] font-bold text-[#333]">Quick Links</h3>
              <div className="mt-[10px] flex flex-col gap-[13px]">
                {quickLinks.map((item, index) => (
                  <Link
                    key={index}
                    className="text-[16px] text-[#333] hover:text-[#2156C9] transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* USEFUL LINKS */}
            <div className="gap-[100px]">
              <h3 className="text-[16px] font-bold text-[#333]">
                Useful Links
              </h3>

              <div className="grid grid-cols-2 gap-[10px] mt-[20px]">
                {usefulLinks.map((item, index) => (
                  <div
                    key={index}
                    className="w-[68px] h-[39px] bg-white rounded-[2px] shadow-[0_1.5px_3.5px_rgba(0,0,0,0.06)] flex items-center justify-center"
                  >
                    <img
                      src={item}
                      alt=""
                      className="max-w-[58px] max-h-[30px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div className="gap-[100px]">
              <h3 className="text-[16px] font-bold text-[#333]">
                Get In Touch
              </h3>

              <div className="mt-[24px] space-y-[18px]">
                <p className="text-[16px] leading-[22px] text-[#333]">
                  Room No. 361 (B),
                  <br />
                  Krishi Bhawan, New Delhi
                </p>

                <p className="text-[16px] text-[#333]">011-23383006</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-end">
            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-[18px]">
              <Link>
                <IoClose className="text-[32px] text-[#333]" />
              </Link>
              <Link>
                {" "}
                <FaFacebookF className="text-[28px] text-[#333]" />
              </Link>
              <Link>
                {" "}
                <FaYoutube className="text-[28px] text-[#333]" />
              </Link>
              <Link>
                {" "}
                <FaInstagram className="text-[32px] text-[#333]" />
              </Link>
            </div>

            {/* APP BUTTONS */}
            <div className="mt-[140px] flex flex-col gap-[20px]">
              <Link>
                <img src={googlePlay} alt="Google Play" className="w-[205px]" />
              </Link>
              <Link>
                <img src={appStore} alt="App Store" className="w-[205px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="bg-white border-t border-[#F1F1F1]">
        <div className="max-w-[1700px] mx-auto px-[135px] py-[24px] flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-[18px]">
            <img src={nicLogo} alt="NIC" className="w-[156px]" />

            <p className="text-[13px] weight-[400]  font-[Roboto] leading-[22px] text-[#18689E]">
              © Content owned, updated and maintained by{" "}
              <span className="font-semibold">
                Ministry of Rural Development | GoI
              </span>
              <br />
              PMAY-G platform is designed, developed and hosted by{" "}
              <span className="font-semibold underline">
                National Informatics Centre(NIC)
              </span>
              <br />
              Visitors: <span className="font-semibold">17702</span> Last
              Updated: <span className="font-semibold">20-06-2024</span>
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-[6px]">
            <img src={htmlLogo} alt="HTML" className="w-[107px]" />

            <img src={cssLogo} alt="CSS" className="w-[107px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
