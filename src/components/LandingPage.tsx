"use client";
import Image from "next/image";
import AppExploreBtn from "./ui/AppExploreBtn";
import PopularCoursesSection from "./PopularCoursesSection";
import TestimonialSection from "./TestimonialSection";
import UpcomingSection from "./UpcomingSection";

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
            {/* <Image
              src="/images/img2.jpg"
              alt="Hero image"
              className="w-full h-auto object-center object-cover"
              width={500}
              height={500}
            /> */}
             <img src="https://dcnepal.pythonanywhere.com/media/uploads/upload/img3.jpg" alt="" className="w-full h-auto object-center object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-indigo-600/10"></div>
          </div>
          <div className="col-span-1 row-span-2 flex bg-yellow-500/70 rounded-2xl">
            {/* <Image
              src="/images/img1.png"
              alt="Hero image"
              className="w-full h-auto object-bottom object-contain"
              width={200}
              height={200}
            /> */}
                <img src="https://dcnepal.pythonanywhere.com/media/uploads/upload/img1.png" alt="" className="w-full h-auto object-bottom object-contain"/>
          </div>
          <div className=" col-span-2 row-span-1 flex flex-col bg-blue-100 rounded-2xl p-5 gap-1">
            <span className="text-gray-500 text-3xl font-semibold">20+</span>
            <span className="text-gray-400 text-base">Courses</span>
            <p className="mt-2 md:block hidden">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
              explicabo.
            </p>
          </div>

          <div className="md:col-span-2 col-span-3 row-span-2  bg-slate-100 rounded-2xl p-5 relative">
            <p className="pr-14">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
              explicabo.
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
            <Image
              src="/images/like.png"
              alt="Hero image"
              className="w-24 h-24 object-center object-cover"
              width={160}
              height={160}
            />
          </div>
        </div>
        <div className=" flex flex-col gap-16 justify-center">
          <div className="flex flex-col gap-2 items-start justify-center">
            <h3 className="text-gray-700 md:text-5xl text-4xl font-black mb-3 mf:leading-[60px] tracking-wider">
              Find your prefect course and improve your skills.
            </h3>
            <p className="text-gray-500 text-lg mb-14">
              We have 30+ courses, taught by Industry expert. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Omnis accusamus, quas iure
              quia id tenetur inventore libero porro neque nostrum.
            </p>
            {/* <AppButton onClick={() => router.push("/courses")}>
              Explore all Courses
            </AppButton> */}
            <AppExploreBtn>Explore All Courses</AppExploreBtn>
          </div>
        </div>
      </div>

      <PopularCoursesSection />

      {/* <AboutSection /> */}

      {/* <div className="min-h-screen w-full flex flex-col py-10 lg:items-center">
        <div className="flex md:justify-center py-10">
          <h3 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl  mb-2">Upcoming Events</h3>
        </div>
        <div className="grid  gap-8 mb-16">
          {courses.map((elem, index) => {
            if (index == 1 || index == 0)
              return <AppHorizontalCard key={elem.id} data={elem} />;
          })}
        </div>
      </div> */}
   
    <UpcomingSection />

      <TestimonialSection />
    </div>
  );
};

export default LandingPage;
