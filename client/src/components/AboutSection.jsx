import aboutImage from "../assets/12704405_5006436 1.jpg";
import arrow1 from "../assets/arrow-1.jpg";
import arrow2 from "../assets/arrow-2.jpg";

export default function AboutSection() {
  return (
    <section className="bg-[#fff] py-28 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-8">
        {/* TOP CONTENT */}
        <div className="text-center">
          <p className="text-[22px] text-gray-700">
            About PMAY-G and How It Works?
          </p>

          <h2 className="text-[72px] leading-[90px] font-bold mt-5">
            What is PMAY-G and How It Works?
          </h2>

          <p className="max-w-[1100px] mx-auto text-[30px] leading-[52px] text-[#646b7c] mt-8">
            Enim urna consequat pellentesque urna adipiscing lacus dictumst
            velit sed. Adipiscing condimentum viverra tincidunt fermentum.
          </p>

          <button className="text-[#2156c9] text-[24px] font-medium mt-10">
            Learn More About PMAYG ≫
          </button>
        </div>

        {/* MAIN GRID */}
        <div className="relative grid grid-cols-3 gap-10 mt-28">
          {/* LEFT COLUMN */}
          <div className="relative">
            {/* STEP 1 */}
            <div className="max-w-[430px] ml-10">
              <p className="text-[#d68a46] text-[20px] uppercase">Step 1</p>

              <h3 className="text-[30px] leading-[70px] font-bold mt-4">
                Get Registered
              </h3>

              <p className="text-[28px] leading-[50px] text-[#636b7d] mt-10">
                Enim urna consequat pellentesque urna adipiscing lacus dictumst
                velit sed.
              </p>

              <button className="text-[#2156c9] text-[24px] font-medium mt-10">
                Learn How to Get Registered ≫
              </button>
            </div>
            {/* STEP 2 */}
            <div className="bg-[#f4f8fc] border border-[#dbe8f4] rounded-[28px] p-12 mt-48">
              <p className="text-[#d68a46] text-[20px] uppercase">Step 2</p>

              <h3 className="text-[30px] leading-[66px] font-bold mt-4">
                Check FTO
                <br />
                Payment
              </h3>

              <p className="text-[28px] leading-[48px] text-[#636b7d] mt-10">
                Enim urna consequat pellentesque urna adipiscing lacus dictumst
                velit sed.
              </p>

              <button className="text-[#2156c9] text-[24px] font-medium mt-10">
                Learn How to Check FTO Payment ≫
              </button>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-right items-start pt-12">
            <img
              src={aboutImage}
              alt="about"
              className="w-full max-w-[650px]"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex items-end pb-10">
            {/* ARROW */}
            <img
              src={arrow1}
              alt="arrow"
              className="absolute -left-[850px]  bottom-[160px] text-[#d8bb77] text-[140px] top-[405px] h-[120px] w-[30px] rotate-[10deg]"
            />

            {/* STEP 3 */}
            <div className="bg-[#f4f8fc] border border-[#dbe8f4] rounded-[28px] p-12">
              <p className="text-[#d68a46] text-[20px] uppercase">Step 3</p>

              <h3 className="text-[30px] leading-[66px] font-bold mt-4">
                Track Progress
              </h3>

              <p className="text-[28px] leading-[48px] text-[#636b7d] mt-10">
                Enim urna consequat pellentesque urna adipiscing lacus dictumst
                velit sed.
              </p>

              <button className="text-[#2156c9] text-[24px] font-medium mt-10">
                Learn How to Track Progress ≫
              </button>
            </div>
            <img
              src={arrow2}
              alt="arrow"
              className="absolute -left-[300px]  bottom-[160px] text-[#d8bb77] text-[140px] top-[1000px] h-[25px] w-[140px] rotate-[10deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
