import aboutImage from "../assets/12704405_5006436 1.jpg";
import arrow1 from "../assets/Vector-1.svg";
import arrow2 from "../assets/Vector-2.svg";

export default function AboutSection() {
  return (
    <section className="bg-white py-[50px] px-[50px] overflow-hidden">
      {/* FIXED FIGMA WRAPPER */}
      <div className="absolute w-[1280px] h-[945px] mx-auto">
        {/* ================= TOP CONTENT ================= */}
        <div className="text-center">
          <p className="text-[18px] text-[#222]">
            About PMAY-G and How It Works?
          </p>

          <h2 className="w-full text-[30px] leading-[1.2] font-bold mt-4 text-black">
            What is PMAY-G and How It Works?
          </h2>

          <p className="w-[920px] mx-auto text-[17px] leading-[1.8] text-[#636b7d] mt-6">
            Enim urna consequat pellentesque urna adipiscing lacus dictumst
            velit sed. Adipiscing condimentum viverra tincidunt fermentum. Nec
            ultrices vitae mi suspendisse dui non turpis.
          </p>

          <button className="text-[#2156c9] text-[15px] font-medium mt-8">
            Learn More About PMAYG ≫
          </button>
        </div>

        {/* ================= STEP 1 ================= */}
        <div className="absolute left-[200px] top-[291px] w-[329px] h-[174]">
          <p className="text-[#d68a46] text-[20px] uppercase tracking-wide">
            Step 1
          </p>

          <h3 className="text-[34px] font-medium mt-4 text-black">
            Get Registered
          </h3>

          <p className="text-[17px] leading-[2] text-[#636b7d] mt-6">
            Enim urna consequat pellentesque urna adipiscing lacus dictumst
            velit sed. Adipis condimentum viverra tincidunt fermentum.
          </p>

          <button className="text-[#2156c9] text-[15px] font-medium mt-8">
            Learn How to Get Registered ≫
          </button>
        </div>

        {/* ================= CENTER IMAGE ================= */}
        <div className="absolute left-[631px] top-[260px]">
          <img
            src={aboutImage}
            alt="about"
            className="w-[512px] h-[512px] object-contain"
          />
        </div>

        {/* ================= ARROW 1 ================= */}
        <img
          src={arrow1}
          alt="arrow"
          className="absolute left-[200px] top-[640px] w-[85px] h-[90px] opacity-100"
        />

        {/* ================= STEP 2 ================= */}
        <div className="absolute left-[100px] top-[750px] w-[400px] bg-[#f4f8fc] border border-[#dbe8f4] rounded-[22px] p-8">
          <p className="text-[#d68a46] text-[20px] uppercase tracking-wide">
            Step 2
          </p>

          <h3 className="text-[32px] leading-[1.3] font-medium mt-4 text-black">
            Check FTO Payment
          </h3>

          <p className="text-[17px] leading-[2] text-[#636b7d] mt-6">
            Enim urna consequat pellentesque urna adipiscing lacus dictumst
            velit sed. Adipis condimentum viverra tincidunt fermentum.
          </p>

          <button className="text-[#2156c9] text-[15px] font-medium mt-7">
            Learn How to Check FTO Payment ≫
          </button>
        </div>

        {/* ================= ARROW 2 ================= */}
        <img
          src={arrow2}
          alt="arrow"
          className="absolute left-[539px] top-[1000px] w-[93.59px] h-[35.27]  opacity-70"
        />

        {/* ================= STEP 3 ================= */}
        <div className="absolute left-[720px] top-[750px] w-[400px] bg-[#f4f8fc] border border-[#dbe8f4] rounded-[22px] p-8">
          <p className="text-[#d68a46] text-[20px] uppercase tracking-wide">
            Step 3
          </p>

          <h3 className="text-[32px] leading-[1.3] font-medium mt-4 text-black">
            Track Progress
          </h3>

          <p className="text-[17px] leading-[2] text-[#636b7d] mt-6">
            Enim urna consequat pellentesque urna adipiscing lacus dictumst
            velit sed. Adipis condimentum viverra tincidunt fermentum.
          </p>

          <button className="text-[#2156c9] text-[15px] font-medium mt-7">
            Learn How to Track Progress ≫
          </button>
        </div>
      </div>
    </section>
  );
}
