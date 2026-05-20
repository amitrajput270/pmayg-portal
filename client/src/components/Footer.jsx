import logo from "../assets/logo.svg";

import digitalIndia from "../assets/digital-india.svg";
import myGov from "../assets/mygov.svg";
import indiaGov from "../assets/india-gov.svg";
import makeIndia from "../assets/make-india.svg";
import gazette from "../assets/gazette.svg";
import ngsp from "../assets/ngsp.svg";

import nicLogo from "../assets/nic-logo.png";

import htmlLogo from "../assets/html-logo.svg";
import cssLogo from "../assets/css-logo.svg";

import playstore from "../assets/google-play.svg";
import appstore from "../assets/app-store.svg";

import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] pt-20">
      {/* TOP FOOTER */}
      <div className="max-w-[1800px] mx-auto bg-[#efefef] px-20 py-24">
        <div className="grid grid-cols-[320px_1fr_1fr_1fr_280px] gap-20">
          {/* LOGO */}
          <div>
            <img src={logo} alt="logo" className="w-[260px]" />
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[22px] font-bold text-black">Quick Links</h3>

            <ul className="space-y-8 mt-10 text-[20px] text-[#3b3b3b]">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Screen Reading</li>
              <li>Accessibility Statement</li>
              <li>Frequently Asked Questions</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h3 className="text-[22px] font-bold text-black">Useful Links</h3>

            <div className="grid grid-cols-2  gap-4 mt-10">
              <img src={digitalIndia} alt="" className="w-full" />
              <img src={myGov} alt="" className="w-full" />

              <img src={indiaGov} alt="" className="w-full" />
              <img src={makeIndia} alt="" className="w-full" />

              <img src={gazette} alt="" className="w-full" />
              <img src={ngsp} alt="" className="w-full" />
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[22px] font-bold text-black">Get In Touch</h3>

            <div className="mt-10 text-[20px] leading-[42px] text-[#3b3b3b]">
              <p>
                Room No. 361 (B),
                <br />
                Krishi Bhawan, New Delhi
              </p>

              <p className="mt-8">011-23383006</p>
            </div>
          </div>

          {/* SOCIAL + STORE */}
          <div className="flex flex-col items-end justify-between">
            {/* SOCIAL */}
            <div className="flex items-center gap-8 text-[42px] text-black rounded-full p-4 shadow-md">
              <FiX />

              <FaFacebookF />

              <FaYoutube />

              <FaInstagram />
            </div>

            {/* STORE BUTTONS */}
            <div className="space-y-6">
              <Link to="/download" className="block w-[230px]">
                <img src={playstore} alt="playstore" className="w-full" />
              </Link>

              <Link to="/download" className="block w-[230px]">
                <img src={appstore} alt="appstore" className="w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="max-w-[1800px] mx-auto px-20 py-14">
        <div className="flex items-center justify-between gap-10">
          {/* LEFT */}
          <div className="flex items-center gap-10">
            <img src={nicLogo} alt="nic" className="w-[220px]" />

            <div className="text-[18px] leading-[36px] text-[#2f5f96]">
              <p>
                © Content owned, updated and maintained by
                <span className="font-bold">
                  {" "}
                  Ministry of Rural Development | GoI
                </span>
              </p>

              <p>
                PMAY-G platform is designed, developed and hosted by
                <span className="font-bold">
                  {" "}
                  National Informatics Centre(NIC)
                </span>
              </p>

              <p>
                Visitors: <span className="font-bold">17702</span> Last Updated:{" "}
                <span className="font-bold">20/11/2024</span>
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6">
            <img src={htmlLogo} alt="html" className="w-[170px]" />

            <img src={cssLogo} alt="css" className="w-[170px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
