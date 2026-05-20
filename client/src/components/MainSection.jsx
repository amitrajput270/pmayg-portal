import { Link } from "react-router-dom";
import SocialSidebar from "./SocialSidebar";
import homeImage from "../assets/home-image.jpg";

export default function MainSection() {
  return (
    <section className="relative pb-40">
      <div className="max-w-[1500px] mx-auto px-8 pt-10">
        <div className="relative rounded overflow-hidden h-[500px]">
          <SocialSidebar />
          <img src={homeImage} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-20">
            <h1 className="text-white text-6xl font-bold leading-tight max-w-6xl">
              Pradhan Mantri Awaas Yojana- Gramin
            </h1>

            <p className="text-white text-2xl mt-8 leading-[55px] max-w-5xl">
              The Pradhan Mantri Awas Yojana Gramin (PMAY-G) is a government
              initiative aimed at providing affordable housing to the rural
              poor, ensuring that families living in kutcha houses or without
              shelter can move into permanent homes with essential amenities.
            </p>
          </div>
        </div>

        <div className="relative z-1 -mt-20 flex  justify-center">
          <div className="grid md:grid-cols-2  w-[1100px]  shadow-2xl">
            <div className="bg-[#db8a32] text-white p-4 text-center">
              <h2 className="text-2xl font-bold leading-[30px] uppercase">
                Citizen /
                <br />
                Beneficiary
              </h2>
              <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
              <img
                src="../src/assets/image-79.jpg"
                className="w-full h-20 object-cover"
              />
              <p className="mt-10 text-2xl leading-[45px]">
                Lorem ipsum dolor sit amet consectetur. Morbi massa libero
                pulvinar elit.
              </p>
              <Link to={"/citizen-beneficiary"}>
                <button className="border border-white px-10 py-5 rounded-xl mt-10 text-2xl">
                  Click Here
                  <span className="ml-3 text-2xl">&#8594;</span>
                </button>
              </Link>
            </div>

            <div className="bg-[#0d5f99] text-white p-4 text-center">
              <h2 className="text-2xl font-bold leading-[70px]">
                For Officials of PMAY-G
              </h2>
              <div className="w-20 h-1 bg-white mx-auto mt-4"></div>

              <p className="mt-10 text-2xl leading-[45px]">
                Lorem ipsum dolor sit amet consectetur. Morbi massa libero
                pulvinar elit.
              </p>

              <button className="border border-white px-10 py-5 rounded-xl mt-10 text-2xl">
                <Link>Click Here</Link>
                <span className="ml-3 text-2xl">&#8594;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
