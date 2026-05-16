import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FaqSection() {
  const faqsLeft = [
    {
      question: "How can beneficiaries monitor their application status?",
      answer:
        "Beneficiaries can monitor application status using the PMAY-G portal or mobile app.",
    },
    {
      question: "What happens if my name is not on the list?",
      answer:
        "You can contact local authorities for verification and correction.",
    },
    {
      question: "How to apply for PMAY-G?",
      answer:
        "Applications can be submitted through Gram Panchayat or online portal.",
    },
    {
      question: "Who is eligible for the scheme?",
      answer: "Rural families meeting PMAY-G eligibility criteria can apply.",
    },
  ];

  const faqsRight = [
    {
      question: "How much financial assistance is provided?",
      answer: "Financial support depends on location and government norms.",
    },
    {
      question: "How much financial assistance is provided?",
      answer: "Financial support depends on location and government norms.",
    },
    {
      question: "How much financial assistance is provided?",
      answer: "Financial support depends on location and government norms.",
    },
    {
      question: "How much financial assistance is provided?",
      answer: "Financial support depends on location and government norms.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const renderFaq = (item, index, side) => {
    const currentIndex = `${side}-${index}`;

    return (
      <div key={index} className="bg-[#f4e7db] rounded-[18px] overflow-hidden">
        <button
          onClick={() =>
            setOpenIndex(openIndex === currentIndex ? null : currentIndex)
          }
          className="w-full flex items-center justify-between px-10 py-9 text-left"
        >
          <span className="text-[20px] font-medium text-[#2d2d2d]">
            {item.question}
          </span>

          <FiChevronDown
            className={`text-[34px] transition duration-300 ${
              openIndex === currentIndex ? "rotate-180" : ""
            }`}
          />
        </button>

        {openIndex === currentIndex && (
          <div className="px-10 pb-8">
            <p className="text-[18px] leading-[34px] text-[#636b7d]">
              {item.answer}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="bg-[#f5f5f5] py-28">
      <div className="max-w-[1650px] mx-auto px-8">
        {/* HEADING */}
        <div className="text-center">
          <p className="text-[22px] text-black">Resolve Your Queries</p>

          <h2 className="text-[64px] leading-[85px] font-bold mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ GRID */}
        <div className="grid grid-cols-2 gap-8 mt-24">
          {/* LEFT */}
          <div className="space-y-8">
            {faqsLeft.map((item, index) => renderFaq(item, index, "left"))}
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            {faqsRight.map((item, index) => renderFaq(item, index, "right"))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-24">
          <button className="border border-[#dfe4ea] rounded-full px-14 py-5 text-[#2156c9] text-[28px] font-semibold hover:bg-white transition">
            View More ≫
          </button>
        </div>
      </div>
    </section>
  );
}
