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
    <section className="bg-[#f5f5f5] py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* TITLE */}
            <h2 className="text-[clamp(34px,4vw,72px)] leading-[1.1] font-bold text-black">
              Pradhan Mantri Awaas Yojana-Gramin
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[clamp(18px,2vw,28px)] leading-[1.8] text-[#636b7d] mt-8 max-w-[900px]">
              Lorem ipsum dolor sit amet consectetur. Ultricies amet posuere ac
              ultrices lectus tellus augue nunc. Semper aliquet condimentum
              rutrum luctus viverra.
            </p>

            {/* CARDS */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {cards.map((card, index) => (
                <div key={index}>
                  <div
                    className={`${card.bg} border ${card.border} rounded-[24px] p-8 min-h-[290px]`}
                  >
                    {/* ICON */}
                    <img src={card.icon} alt="" className="w-[60px] h-[60px]" />

                    {/* TITLE */}
                    <h3 className="text-[clamp(20px,2vw,34px)] font-bold text-black mt-6">
                      {card.title}
                    </h3>

                    {/* TEXT */}
                    <p className="text-[clamp(16px,1.2vw,22px)] leading-[1.7] text-[#2d2d2d] mt-4">
                      {card.text}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <button className="text-[#2156c9] text-[clamp(18px,1.5vw,28px)] font-medium mt-5">
                    {card.button}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={sectionImage}
              alt="PMAYG"
              className="w-full max-w-[850px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
