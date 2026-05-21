import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FaqSection() {
  const leftFaqs = [
    {
      question: "How can beneficiaries monitor their application status?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Habitasse eleifend aliquam est nisl in eget enim. Amet ac morbi morbi placerat vehicula egestas. Lorem ipsum dolor sit amet consectetur. Habitasse eleifend est nisl in eget enim.",
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

  const rightFaqs = [
    {
      question: "How much financial assistance is provided?",
      answer: "Financial assistance depends on region and scheme norms.",
    },
    {
      question: "How much financial assistance is provided?",
      answer: "Financial assistance depends on region and scheme norms.",
    },
    {
      question: "How much financial assistance is provided?",
      answer: "Financial assistance depends on region and scheme norms.",
    },
    {
      question: "How much financial assistance is provided?",
      answer: "Financial assistance depends on region and scheme norms.",
    },
  ];

  const [openIndex, setOpenIndex] = useState("");

  const renderFaq = (item, index, side) => {
    const current = `${side}-${index}`;
    const isOpen = openIndex === current;

    return (
      <div
        key={index}
        className={`
          rounded-[12px]
          overflow-hidden
          transition-all
          duration-300
          ${isOpen ? "bg-white border border-[#D5D5D5]" : "bg-[#F7EBDD]"}
        `}
      >
        {/* HEADER */}
        <button
          onClick={() => setOpenIndex(isOpen ? null : current)}
          className="w-full flex items-center justify-between px-[40px] py-[34px] text-left"
        >
          <span
            className={`
              text-[14px]
              leading-[24px]
              font-semimedium
              transition
              ${isOpen ? "text-[#D78642]" : "text-[#1E1E1E]"}
            `}
          >
            {item.question}
          </span>

          <FiChevronDown
            className={`
              text-[34px]
              transition-all
              duration-300
              ${isOpen ? "rotate-180 text-[#D78642]" : "text-black"}
            `}
          />
        </button>

        {/* ANSWER */}
        {isOpen && (
          <div className="border-t border-[#E3E3E3] px-[40px] py-[36px]">
            <p className="max-w-[640px] text-[14px] leading-[58px] text-[#666666]">
              {item.answer}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="w-full bg-[#F8F8F8] py-[80px]">
      <div className="max-w-[1280px] mx-auto px-[44px]">
        {/* TOP CONTENT */}
        <div className="text-center">
          <p className="text-[18px] leading-[28px] text-black">
            Resolve Your Queries
          </p>

          <h2 className="mt-[12px] text-[30px] leading-[58px] font-semibold text-black">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ GRID */}
        <div className="grid grid-cols-2 gap-[24px] mt-[52px]">
          {/* LEFT */}
          <div className="space-y-[24px]">
            {leftFaqs.map((item, index) => renderFaq(item, index, "left"))}
          </div>

          {/* RIGHT */}
          <div className="space-y-[24px]">
            {rightFaqs.map((item, index) => renderFaq(item, index, "right"))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-[42px]">
          <button className="h-[68px] px-[32px] border border-[#E4E4E4] rounded-full flex items-center gap-[10px] text-[#2156C9] text-[15px] font-semibold hover:bg-white transition">
            View More
            <span className="text-[30px]">≫</span>
          </button>
        </div>
      </div>
    </section>
  );
}
