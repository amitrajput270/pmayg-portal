import story1 from "../assets/story-1.svg";
import story2 from "../assets/story-2.svg";

import { FaPlay } from "react-icons/fa";

export default function SuccessStories() {
  const stories = [
    {
      image: story1,
      title: "Episode 1: PMAY-G (M.P)",
      description:
        "Habitasse eleifend aliquam est nisl in eget enim. Amet ac morbi morbi placerat vehicula egestas.",
    },
    {
      image: story2,
      title: "Episode 2: PMAY-G (M.P)",
      description:
        "Habitasse eleifend aliquam est nisl in eget enim. Amet ac morbi morbi placerat vehicula egestas.",
    },
    {
      image: story1,
      title: "Episode 3: PMAY-G (M.P)",
      description:
        "Habitasse eleifend aliquam est nisl in eget enim. Amet ac morbi morbi placerat vehicula egestas.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-24 overflow-hidden">
      <div className="max-w-[1700px] mx-auto pl-10">
        <div className="grid grid-cols-[500px_1fr] gap-16 items-start">
          {/* LEFT CONTENT */}
          <div className="pt-10">
            <h2 className="text-[50px] leading-[92px] font-bold text-black">
              Transforming Rural
              <br />
              India: PMAY-G Success
              <br />
              Stories
            </h2>

            <p className="text-[24px] leading-[50px] text-[#646b7c] mt-12">
              Enim urna consequat pellentesque urna adipiscing lacus dictumst
              velit sed. Adipiscing condimentum viverra tincidunt fermentum.
            </p>

            <button className="mt-14 text-[#2156c9] text-[28px] font-semibold">
              View More ≫
            </button>
          </div>

          {/* RIGHT CARDS */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-10 w-max pr-20">
              {stories.map((story, index) => (
                <div
                  key={index}
                  className="bg-[#ececec] rounded-[36px] overflow-hidden w-[620px] flex-shrink-0"
                >
                  {/* IMAGE */}
                  <div className="p-6 pb-0">
                    <img
                      src={story.image}
                      alt="story"
                      className="w-full h-[370px] object-cover rounded-[28px]"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 flex justify-between items-end gap-8">
                    <div>
                      <h3 className="text-[26px] font-bold text-black">
                        {story.title}
                      </h3>

                      <p className="text-[18px] leading-[40px] text-[#4d4d4d] mt-4 max-w-[420px]">
                        {story.description}
                      </p>
                    </div>

                    {/* PLAY BUTTON */}
                    <button className="min-w-[72px] h-[72px] rounded-[20px] bg-[#f5f5f5] flex items-center justify-center shadow-md mb-4">
                      <FaPlay className="text-[#ff7a00] text-[28px]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
