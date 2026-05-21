import story1 from "@assets/images/story-1.svg";
import story2 from "@assets/images/story-2.svg";

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
    <section className="w-full py-24 overflow-hidden">
      <div className="max-w-[1480px] mx-auto pl-10">
        <div className="grid grid-cols-[500px_1fr] gap-16 items-start">
          {/* LEFT CONTENT */}
          <div className="pt-10">
            <h2 className="text-[30px] leading-[42px] font-semibold text-black">
              Transforming Rural
              <br />
              India: PMAY-G Success
              <br />
              Stories
            </h2>

            <p className="text-[17px] leading-[27px] text-[#646b7c] mt-6">
              Enim urna consequat pellentesque urna adipiscing lacus dictumst
              velit sed. Adipiscing condimentum viverra tincidunt fermentum.
            </p>

            <button className="mt-10 text-[#2156c9] text-[17px] font-medium flex items-center gap-4 hover:gap-6 transition-all">
              View More <span className="text-[30px]">≫</span>
            </button>
          </div>

          {/* RIGHT CARDS */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex w-[80px] h-[487px] gap-5">
              {stories.map((story, index) => (
                <div
                  key={index}
                  className="bg-[#ececec] rounded-[26px] overflow-hidden w-[400px] flex-shrink-0"
                >
                  {/* IMAGE */}
                  <div className="p-6 pb-0">
                    <img
                      src={story.image}
                      alt="story"
                      className="w-[354px] h-[253px] top-[12px] left-[10px] redius-[18px] object-cover rounded-[28px]"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 flex justify-between items-end gap-8">
                    <div>
                      <h3 className="text-[15px] font-semibold text-black">
                        {story.title}
                      </h3>

                      <p className="text-[14px] leading-[25px] text-[#4d4d4d] mt-2 max-w-[420px]">
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
