"use client";
import Image from "next/image";
import AppButton from "./ui/AppButton";
// import heroImg from "@/assets/images/hero.svg";
import AppProductCard from "./ui/AppProductCard";
import { courses } from "./dummyData.js";
import AppHorizontalCard from "./ui/AppHorizontalCard";
import { useRouter } from "next/navigation";
import AppIcon from "./ui/AppIcon";
import AppExploreBtn from "./ui/AppExploreBtn";
import { useState } from "react";

const LandingPage = () => {
  const router = useRouter();

  const coursesChips = [
    {
      id: 1,
      name: "Web Designing",
    },
    {
      id: 2,
      name: "Software Development",
    },
    {
      id: 3,
      name: "UI/UX",
    },
    {
      id: 4,
      name: "Mobile Development",
    },
    {
      id: 5,
      name: "Data Structure & Algorithm",
    },
    {
      id: 6,
      name: "Network Security",
    },
    {
      id: 7,
      name: "Web Designing",
    },
    {
      id: 8,
      name: "Software Development",
    },
    {
      id: 9,
      name: "UI/UX",
    },
  ];

  const [isDemoVisible, setIsDemoVisible] = useState(true);
  return (
    <div className="">
      {
  isDemoVisible &&
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 md:w-1/3 w-full py-3 flex justify-between px-5 bg-green-100 shadow rounded-t-md items-center text-green-800">
          <span>Website is currently in Development Phase.</span>
          <button type="button" onClick={() => setIsDemoVisible(false)}>
          <AppIcon name="close"/>
          </button>
        </div>
}
      <div className="grid lg:grid-cols-2 md:gap-20 gap-14 py-10">
        <div className="grid grid-cols-3 gird-rows-6 md:gap-5 gap-3">
          <div className="col-span-1 row-span-1 flex bg-slate-100 rounded-2xl flex-col  justify-center p-5">
            <span className="text-gray-500 text-3xl font-semibold">20+</span>
            <span className="text-gray-400 text-base">Qualified Teachers</span>
          </div>
            <div className="col-span-2 row-span-2 flex bg-blue-50 rounded-2xl overflow-hidden">
              <Image
                src="/images/img2.jpg"
                alt="Hero image"
                className="w-full h-auto object-center object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="col-span-1 row-span-2 flex bg-yellow-500/70 rounded-2xl">
            <Image
              src="/images/img1.png"
              alt="Hero image"
              className="w-full h-auto object-bottom object-contain"
              width={200}
              height={200}
            />
          </div>
            <div className=" col-span-2 row-span-1 flex flex-col bg-blue-100 rounded-2xl p-5 gap-1">
              <span className="text-gray-500 text-3xl font-semibold">20+</span>
              <span className="text-gray-400 text-base">Courses</span>
              <p className="mt-2 md:block hidden">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora, explicabo.
              </p>
            </div>
        

          <div className="md:col-span-2 col-span-3 row-span-2  bg-slate-100 rounded-2xl p-5 relative">
            <p className="mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
              explicabo.
            </p>
            <div className=" absolute right-4 bottom-4 w-14 h-14 flex items-center justify-center rounded-full bg-white -rotate-45">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-arrow-right w-8 h-8"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
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
            <h3 className="text-gray-700 text-5xl font-black mb-3 leading-[60px] tracking-wider">
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

      {/* span Popular courses */}
      <div className="min-h-screen w-full flex flex-col md:py-20 py-14 md:items-center items-start">
        <div className="flex flex-col gap-5 justify-center md:items-center mt-10 mb-12">
          <h3 className="text-4xl font-semibold mb-2">Explore Our Offerings</h3>
          <div className="flex flex-wrap gap-3 md:justify-center">
            {coursesChips.map((elem) => (
              <span
                key={elem.id}
                className="px-5 py-1 border rounded-full bg-gray-50 border-gray-200 text-gray-500"
              >
                {elem.name}
              </span>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-8 mb-16">
          {courses.map((elem) => (
            <AppProductCard key={elem.id} data={elem} />
          ))}
        </div>
        <div className="mb-4">
          <AppExploreBtn>See All Our Courses</AppExploreBtn>
        </div>
      </div>

      {/*  About section */}
      <div className="bg-blue-50 rounded-2xl grid lg:grid-cols-5 overflow-hidden lg:p-10 p-5 gap-20">
        <div className="col-span-3 ">
          <h3 className="text-4xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-500 text-lg mb-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            maiores reprehenderit assumenda in debitis labore neque ipsam illo
            itaque hic pariatur doloremque repellendus architecto eos, expedita
            quo nulla minus vel qui at sit ducimus culpa eveniet recusandae.
            Aliquam soluta iure ad perspiciatis at! Labore numquam placeat
            beatae nesciunt!
          </p>
          <AppButton>Contact Us</AppButton>
        </div>
        {/* <div className="col-span-2 bg-blue-500">
          image
        </div> */}
      </div>

      <div className="min-h-screen w-full flex flex-col py-10 lg:items-center">
        <div className="flex md:justify-center py-10">
          <h3 className="text-3xl font-semibold">Upcoming Events</h3>
        </div>
        <div className="grid  gap-8 mb-16">
          {courses.map((elem, index) => {
            if (index == 1 || index == 0)
              return <AppHorizontalCard key={elem.id} data={elem} />;
          })}
        </div>
      </div>
    </div>
    
  );
};

export default LandingPage;
