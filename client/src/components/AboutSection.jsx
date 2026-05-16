import aboutImage from "../assets/12704405_5006436 1.jpg";

export default function AboutSection() {
  return (
    <section className="bg-[#f5f5f5] px-20">
      {/* <div className="container"> */}
      {/* Heading */}
      <div className="text-center">
        <p className="text-[5px] text-gray-300">
          About PMAY-G and How It Works?
        </p>

        <h2 className="text-[72px] leading-[90px] font-bold mt-5">
          What is PMAY-G and
          <br />
          How It Works?
        </h2>

        <p className="text-[28px] leading-[48px] text-gray-500 max-w-[1100px] mx-auto mt-8">
          Enim urna consequat pellentesque urna adipiscing lacus dictumst velit
          sed. Adipiscing condimentum viverra tincidunt fermentum.
        </p>

        <button className="mt-10 text-[#2156c9] text-[24px] font-semibold">
          Learn More About PMAYG →
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-16 items-center mt-28">
        {/* Left */}
        <div className="space-y-16">
          <div>
            <p className="text-[#d48842] text-[28px] uppercase">Step 1</p>

            <h3 className="text-[52px] leading-[65px] font-bold mt-4">
              Get Registered
            </h3>

            <p className="text-[28px] leading-[48px] text-gray-500 mt-8">
              Complete registration process for PMAY-G housing scheme.
            </p>

            <button className="mt-8 text-[#2156c9] text-[24px] font-semibold">
              Learn More →
            </button>
          </div>

          <div className="bg-[#f4f8fc] border border-[#dbe8f4] rounded-[30px] p-10">
            <p className="text-[#d48842] text-[28px] uppercase">Step 2</p>

            <h3 className="text-[48px] leading-[60px] font-bold mt-4">
              Check FTO Payment
            </h3>

            <p className="text-[26px] leading-[46px] text-gray-500 mt-8">
              Easily verify payment and transfer details.
            </p>

            <button className="mt-8 text-[#2156c9] text-[24px] font-semibold">
              Learn More →
            </button>
          </div>
        </div>

        {/* Center Image */}
        {/* <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="about"
              className="w-full max-w-[550px]"
            />
          </div> */}

        {/* Right */}
        <div className="flex items-end h-full">
          <div className="bg-[#f4f8fc] border border-[#dbe8f4] rounded-[30px] p-10">
            <p className="text-[#d48842] text-[28px] uppercase">Step 3</p>

            <h3 className="text-[48px] leading-[60px] font-bold mt-4">
              Track Progress
            </h3>

            <p className="text-[26px] leading-[46px] text-gray-500 mt-8">
              Track construction and application progress.
            </p>

            <button className="mt-8 text-[#2156c9] text-[24px] font-semibold">
              Learn More →
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
