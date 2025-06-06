import AppExploreBtn from "./ui/AppExploreBtn";
import PopularCoursesSection from "./PopularCoursesSection";
import TestimonialSection from "./TestimonialSection";
import UpcomingSection from "./UpcomingSection";
import React from "react";
import like from "../assets/images/like.png";
import img1 from "../assets/images/img1.png";


const LandingPage = () => {
  return (
    <div className="">
      <div className="grid lg:grid-cols-2 md:gap-20 gap-14 py-10">
        <div className="grid grid-cols-3 gird-rows-6 md:gap-5 gap-4">
          <div className="col-span-1 row-span-1 flex bg-slate-100 rounded-2xl flex-col  justify-center p-5">
            <span className="text-gray-500 text-3xl font-semibold">20+</span>
            <span className="text-gray-400 text-base">Qualified Teachers</span>
          </div>
          <div className="col-span-2 row-span-2 flex bg-blue-50 rounded-2xl overflow-hidden relative">
            <img
              src="https://dcnepal.pythonanywhere.com/media/uploads/upload/img3.jpg"
              alt=""
              className="w-full h-auto object-center object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-indigo-600/10"></div>
          </div>
          <div className="col-span-1 row-span-2 flex bg-yellow-500/70 rounded-2xl">
            <img
              src={img1}
              alt=""
              className="w-full h-auto object-bottom object-contain"
            />
          </div>
          <div className=" col-span-2 row-span-1 flex flex-col bg-blue-100 rounded-2xl p-5 gap-1">
            <span className="text-gray-500 text-3xl font-semibold">20+</span>
            <span className="text-gray-400 text-base">Courses</span>
            <p className="mt-2 md:block hidden">
              Learn from the industrial Experts
            </p>
          </div>

          <div className="md:col-span-2 col-span-3 row-span-2  bg-slate-100 rounded-2xl p-5 relative lg:min-h-32 min-h-28">
            <p className="pr-14">
            Master your next skill. Power lies in continuous learning and growth.
            </p>
            <div className=" absolute right-0 bottom-0 w-16 h-16  bg-slate-50 rounded-tl-[30px]">
              <div className="relative w-full h-full flex items-end justify-end">
                <div className=" w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 -rotate-45">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-arrow-right w-8 h-8"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </div>

                {/* top */}
                <div className="absolute w-6 h-6 bg-slate-50 -top-6 right-0">
                  <div className="w-full h-full rounded-br-2xl bg-slate-100"></div>
                </div>

                {/* bottom */}
                <div className="absolute w-6 h-6 bg-slate-50 bottom-0 right-16">
                  <div className="w-full h-full rounded-br-2xl bg-slate-100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 row-span-2 bg-yellow-500/40 rounded-2xl md:flex items-center justify-center hidden">
            <img
              src={like}
              alt="Hero image"
              className="w-24 h-24 object-center object-cover"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-16 justify-center">
          <div className="flex flex-col gap-2 items-start justify-center">
            <h3 className="text-gray-700 md:text-5xl text-4xl font-black mb-3 mf:leading-[60px] tracking-wider">
              Find your prefect course and improve your skills.
            </h3>
            <p className="text-gray-500 text-lg mb-14">
             Whether you're aiming to enhance your career, explore a new passion, or gain in-demand skills, our curated selection of courses helps you grow with confidence. Start learning today and take the next step toward your goals.
            </p>
            <AppExploreBtn>Explore All Courses</AppExploreBtn>
          </div>
        </div>
      </div>

      <PopularCoursesSection />
      <UpcomingSection />
      <TestimonialSection />
    </div>
  );
};

export default LandingPage;
