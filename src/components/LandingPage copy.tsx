"use client"
import Image from "next/image";
import AppButton from "./ui/AppButton";
// import heroImg from "@/assets/images/hero.svg";
import AppProductCard from "./ui/AppProductCard";
import { courses } from "./dummyData.js";
import AppHorizontalCard from "./ui/AppHorizontalCard";
import { useRouter } from "next/navigation";
const LandingPage = () => {
  const router = useRouter()

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-16 py-10 min-h-[calc(100vh_-_80px)]">
        <div className=" flex flex-col gap-16 justify-center">
          <div className="flex flex-col gap-2 items-start justify-center">
            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
              100% Quality Course
            </span>
            <h3 className="text-gray-700 text-5xl font-black mb-2 leading-[60px] tracking-wider">
              Find your prefect course and improve your skills.
            </h3>
            <p className="text-gray-500 text-base mb-6">
              We have 30+ courses, taught by Industry expert.
            </p>
            <AppButton onClick={() => router.push('/courses')} >Explore all Courses</AppButton>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-3xl font-semibold">100+</span>
              <span className="text-gray-400 text-base">Happy Students</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-3xl font-semibold">100+</span>
              <span className="text-gray-400 text-base">Happy Students</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-3xl font-semibold">100+</span>
              <span className="text-gray-400 text-base">Happy Students</span>
            </div>
          </div>
        </div>
        <div className="">
          {/* <Image src={heroImg} alt="Hero image" className="w-full" /> */}
          <Image
            src="/images/hero.svg"
            alt="Hero image"
            className="w-full h-auto"
            width={100}
            height={100}
          />
          {/* <img  alt="" /> */}
        </div>
      </div>

      {/* span Popular courses */}
      <div className="min-h-screen w-full flex flex-col py-10 items-center">
        <div className="flex flex-col gap-5 justify-center items-center py-10">
          <h3 className="text-3xl font-semibold">
            Get started quickly with these best-practice templates
          </h3>
          <span>
            No need to start from scratch. In just a few minutes, you can use
            Interfaces, Tables, and Zaps to create complete solutions and
            reclaim countless hours of your time.
          </span>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-8 mb-16">
          {courses.map((elem) => (
            <AppProductCard key={elem.id} data={elem} />
          ))}
        </div>
        <div className="mb-4">
          <AppButton>See All Our Courses</AppButton>
        </div>
        <span className="text-gray-400 text-thin">
          Learn from industry Expert and Professionals
        </span>
      </div>

      <div className="min-h-screen w-full flex flex-col py-10 items-center">
        <div className="flex justify-center py-10">
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
