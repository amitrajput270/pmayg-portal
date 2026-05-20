import sectionImage from "../assets/info-section.svg";

import pmayIcon from "../assets/icons/PMAYG3.svg";
import eligibilityIcon from "../assets/icon-eligibility.svg";
import beneficiaryIcon from "../assets/icon-beneficiary.svg";
import houseIcon from "../assets/icons/construction.svg";

export default function InfoSection() {
  const cards = [
    {
      icon: pmayIcon,
      title: "What is PMAYG?",
      text: "Lorem ipsum dolor sit amet consectetur. Ultricies amet posuere ac ultrices lectus tellus augue nunc.",
      bg: "bg-[#f6e8bf]",
      border: "border-[#d9c178]",
      button: "Learn About PMAYG ≫",
    },
    {
      icon: eligibilityIcon,
      title: "Check Your Eligibility",
      text: "Lorem ipsum dolor sit amet consectetur. Ultricies amet posuere ac ultrices lectus tellus augue nunc.",
      bg: "bg-[#e4f2ff]",
      border: "border-[#9db8d1]",
      button: "Check Your Eligibility ≫",
    },
    {
      icon: beneficiaryIcon,
      title: "Get Registered as a Beneficiary",
      text: "Lorem ipsum dolor sit amet consectetur. Ultricies amet posuere ac ultrices lectus tellus augue nunc.",
      bg: "bg-[#f9ecef]",
      border: "border-[#d8a4ab]",
      button: "Learn How to Get Registered ≫",
    },
    {
      icon: houseIcon,
      title: "Track Status of Your House",
      text: "Lorem ipsum dolor sit amet consectetur. Ultricies amet posuere ac ultrices lectus tellus augue nunc.",
      bg: "bg-[#e6f2e7]",
      border: "border-[#a7c4a8]",
      button: "Track Status of Your House ≫",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-[55%_45%] gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* TITLE */}
            <h2 className="text-[clamp(38px,4vw,72px)] leading-[1.08] font-bold text-black max-w-[850px]">
              Pradhan Mantri Awaas Yojana-Gramin
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[clamp(18px,1.4vw,24px)] leading-[1.7] text-[#636b7d] mt-6 max-w-[760px]">
              Lorem ipsum dolor sit amet consectetur. Ultricies amet posuere ac
              ultrices lectus tellus augue nunc. Semper aliquet condimentum
              rutrum luctus viverra.
            </p>

            {/* CARDS */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {cards.map((card, index) => (
                <div key={index}>
                  {/* CARD */}
                  <div
                    className={`${card.bg} border ${card.border} rounded-[22px] p-6 lg:p-7 min-h-[240px] transition hover:shadow-lg`}
                  >
                    {/* ICON */}
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-[52px] h-[52px] object-contain"
                    />

                    {/* TITLE */}
                    <h3 className="text-[clamp(22px,1.8vw,32px)] leading-[1.3] font-bold text-black mt-5">
                      {card.title}
                    </h3>

                    {/* TEXT */}
                    <p className="text-[clamp(15px,1vw,19px)] leading-[1.8] text-[#2d2d2d] mt-4">
                      {card.text}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <button className="text-[#2156c9] text-[18px] lg:text-[22px] font-medium mt-4 hover:underline">
                    {card.button}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end relative">
            <img
              src={sectionImage}
              alt="PMAYG"
              className="w-full max-w-[760px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
