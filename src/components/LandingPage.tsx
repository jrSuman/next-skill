import Image from "next/image";
import AppButton from "./AppButton";
import heroImg from "@/assets/images/hero.svg";
import AppProductCard from "./AppProductCard";
import {courses} from '@/assets/dummyData.js';
const LandingPage = () => {
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
            <AppButton>Explore all Courses</AppButton>
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
          <Image src={heroImg} alt="Hero image" className="w-full h-auto" />
          {/* <img  alt="" /> */}
        </div>
      </div>

      {/* span Popular courses */}
      <div className="min-h-screen w-full flex flex-col py-10 bg-red-50">
        <div className="">
          <h3>Explore courses</h3>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {
            courses.map(elem => (
              <AppProductCard  key={elem.id} data={elem}/>
            ))
          }
      
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
