import aboutImage from "../assets/12704405_5006436 1.jpg";

const steps = [
  {
    label: "Step 1",
    title: "Get Registered",
    description: "Complete registration process for PMAY-G housing scheme.",
  },
  {
    label: "Step 2",
    title: "Check FTO Payment",
    description: "Easily verify payment and transfer details.",
    boxed: true,
  },
  {
    label: "Step 3",
    title: "Track Progress",
    description: "Track construction and application progress.",
    boxed: true,
  },
];

function StepItem({
  label,
  title,
  description,
  boxed = false,
  className = "",
}) {
  return (
    <div
      className={`${
        boxed
          ? "rounded-lg border border-[#dbe8f4] bg-[#f4f8fc] p-6 lg:p-8 xl:p-10"
          : ""
      } ${className}`}
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-[#d48842] md:text-base xl:text-[28px]">
        {label}
      </p>

      <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-950 md:text-3xl xl:text-[48px] xl:leading-[60px]">
        {title}
      </h3>

      <p className="mt-4 text-base leading-7 text-gray-500 md:text-lg md:leading-8 xl:mt-8 xl:text-[26px] xl:leading-[46px]">
        {description}
      </p>

      <button className="mt-5 text-base font-semibold text-[#2156c9] md:text-lg xl:mt-8 xl:text-[24px]">
        Learn More →
      </button>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-20 xl:py-28">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-base text-gray-500 md:text-xl xl:text-[24px]">
            About PMAY-G and How It Works?
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-6xl xl:mt-5 xl:text-[72px] xl:leading-[90px]">
            What is PMAY-G and
            <br />
            How It Works?
          </h2>

          <p className="mx-auto mt-5 max-w-[1100px] text-base leading-7 text-gray-500 md:mt-7 md:text-xl md:leading-9 xl:mt-8 xl:text-[28px] xl:leading-[48px]">
            Enim urna consequat pellentesque urna adipiscing lacus dictumst
            velit sed. Adipiscing condimentum viverra tincidunt fermentum.
          </p>

          <button className="mt-7 text-base font-semibold text-[#2156c9] md:text-xl xl:mt-10 xl:text-[24px]">
            Learn More About PMAYG →
          </button>
        </div>

        <div className="mt-12 grid items-center gap-6 md:mt-16 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(260px,420px)_minmax(0,1fr)] xl:gap-12 2xl:gap-16">
          <div className="space-y-6 lg:space-y-10 xl:space-y-16">
            <StepItem {...steps[0]} />
            <StepItem {...steps[1]} />
          </div>

          {/* <div className="order-first flex justify-right lg:order-none">
            <img
              src={aboutImage}
              alt="PMAY-G housing support illustration"
              className="w-full max-w-[320px] object-contain sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[550px]"
            />
          </div> */}

          <div className="lg:flex lg:h-full lg:items-end">
            <StepItem {...steps[2]} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
