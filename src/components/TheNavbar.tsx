"use client";
import AppButton from "./ui/AppButton";
import AppMainSearchBar from "./AppMainSearchBar";
// import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import AppIcon from "./ui/AppIcon";
import AppLink from "./ui/AppLink";
import React from "react";
import api from "../api/axios";

const TheNavbar = () => {
  // const router = useRouter();
  let navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dropdownRef = useRef<any>(null);

  const [showCatagories, setShowCategories] = useState(false);
  const [coursesCategory, setCoursesCategory] = useState<any>([]);

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!dropdownRef.current?.contains(event.target)) {
        // alert("Outside Clicked.");
        // console.log("Outside Clicked. ");
        setShowCategories(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [dropdownRef]);

  const fetchCategory = async () => {
    try {
      const res = await api.get("/category/");
      // console.log('response', res)
      if (res.status == 200) {
        setCoursesCategory(res.data);
      }
    } catch (error) {
      console.log("eroor", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleNavigate = (path) => {
    setIsMenuVisible(false);
    navigate(path);
  };

  // const activeSegment = useSelectedLayoutSegment();

  // useEffect(() => {
  //   setIsMenuVisible(false);
  // }, [activeSegment]);

  return (
    <div className="bg-white py-3 flex border-b sticky top-0 z-30 ">
      <div className="container lg:flex hidden mx-auto justify-between gap-x-32">
        <div className="flex gap-x-10 items-center grow">
          <div
            className="flex gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <svg
              className="w-12 h-auto"
              viewBox="0 0 134 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M103.877 39.4184C90.4685 39.4184 71.5195 50.2872 72.8594 70.2746C74.5706 95.7997 95.7997 100 103.716 100C110.985 100 133.279 94.0226 133.279 69.3053C133.279 45.986 115.509 40.5652 103.877 39.4184ZM89.4992 64.4588L102.585 51.3732L116.801 64.4588L111.632 69.3053L106.624 65.2666V88.3683H99.0307V65.2666L94.5073 69.3053L89.4992 64.4588Z"
                fill="#FEBC4B"
              />
              <path
                d="M0.807754 27.9483L52.6656 0L105.008 27.9483L52.6656 55.412L16.3166 36.0258V82.5525H0V66.3974H9.36995V33.2795L0.807754 27.9483Z"
                fill="#FEBC4B"
              />
              <path
                d="M22.294 47.0113V62.8433L52.6656 79.483L66.7205 72.5364C66.7205 67.3129 67.3021 56.3813 69.6284 54.4427C71.9548 52.504 59.2892 59.2353 52.6656 62.8433L22.294 47.0113Z"
                fill="#FEBC4B"
              />
            </svg>
            <div className="flex flex-col  justify-center">
              <span className=" font-extrabold text-lg leading-5">
                NEXT SKILLS
              </span>
              <span className="font-semibold text-sm leading-4">Academy</span>
            </div>
          </div>
          <div className="cursor-pointer relative" ref={dropdownRef}>
            <div
              className="px-3 flex gap-x-2 items-center"
              onClick={() => navigate("/courses")}
              // onClick={()=> setShowCategories(!showCatagories)}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-grid"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
                </svg>
              </span>
              {/* <span className="font-semibold">Categories</span> */}
              <span className="font-semibold">Courses</span>
            </div>

            {/* categores modal */}
            {showCatagories && (
              <div className="fixed top-16 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-b-2xl flex gap-5 overflow-hidden">
                <div className=" min-w-[260px] p-5">
                  {coursesCategory.map((category: any, index: number) => (
                    <button
                      type="button"
                      key={category.name}
                      className={
                        "px-3 py-2 rounded-lg hover:bg-primary-50 flex w-full  justify-between items-center"
                      }
                      onClick={() => setActiveIndex(index)}
                    >
                      <span>{category.name}</span>
                      {category.children.length > 0 && (
                        <AppIcon name="chevron-right"></AppIcon>
                      )}
                    </button>
                  ))}
                </div>
                <div className=" min-w-[260px] border-l p-5 flex flex-col">
                  {coursesCategory[activeIndex].children.map((item: any) => (
                    <AppLink
                      to="./courses"
                      key={item.id}
                      className="px-3 py-2 rounded-lg hover:bg-primary-50 flex w-full  justify-between items-center"
                    >
                      {item.name}
                    </AppLink>
                  ))}
                </div>
                <div className="p-5">
                  <div className="min-w-[260px] border border-emerald-500 p-5 rounded-lg">
                    <span>Upcoming events</span>
                    <ul>
                      <li>Git Crash Course</li>
                      <li>Into To UI/UX</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-1">
            <AppMainSearchBar />
          </div>
        </div>
        <div className="">
          <AppButton outline onClick={() => navigate("/contact-us")}>
            Send Enquiry
          </AppButton>
        </div>
      </div>

      <div className="lg:hidden flex container justify-between mx-auto">
        <div
          className="flex gap-3 cursor-pointer "
          // onClick={() => navigate("/")}
          onClick={() => handleNavigate("/")}
        >
          <svg
            className="w-12 h-auto"
            viewBox="0 0 134 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M103.877 39.4184C90.4685 39.4184 71.5195 50.2872 72.8594 70.2746C74.5706 95.7997 95.7997 100 103.716 100C110.985 100 133.279 94.0226 133.279 69.3053C133.279 45.986 115.509 40.5652 103.877 39.4184ZM89.4992 64.4588L102.585 51.3732L116.801 64.4588L111.632 69.3053L106.624 65.2666V88.3683H99.0307V65.2666L94.5073 69.3053L89.4992 64.4588Z"
              fill="#FEBC4B"
            />
            <path
              d="M0.807754 27.9483L52.6656 0L105.008 27.9483L52.6656 55.412L16.3166 36.0258V82.5525H0V66.3974H9.36995V33.2795L0.807754 27.9483Z"
              fill="#FEBC4B"
            />
            <path
              d="M22.294 47.0113V62.8433L52.6656 79.483L66.7205 72.5364C66.7205 67.3129 67.3021 56.3813 69.6284 54.4427C71.9548 52.504 59.2892 59.2353 52.6656 62.8433L22.294 47.0113Z"
              fill="#FEBC4B"
            />
          </svg>
          <div className="flex flex-col  justify-center">
            <span className=" font-extrabold  leading-5">NEXT SKILLS</span>
            <span className="font-semibold text-xs leading-3">Academy</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsMenuVisible(true)}
          className=" w-10 h-10 flex items-center justify-center"
        >
          <AppIcon name="list" className="w-6 h-6" />
        </button>
      </div>
      {isMenuVisible && (
        <div className="fixed inset-0 bg-white">
          <div
            className="absolute top-3 right-3  w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuVisible(false)}
          >
            {/* Close */}
            <AppIcon name="close" className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-2 p-6">
            <div className="flex gap-3 cursor-pointer">
              <svg
                className="w-12 h-auto"
                viewBox="0 0 134 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M103.877 39.4184C90.4685 39.4184 71.5195 50.2872 72.8594 70.2746C74.5706 95.7997 95.7997 100 103.716 100C110.985 100 133.279 94.0226 133.279 69.3053C133.279 45.986 115.509 40.5652 103.877 39.4184ZM89.4992 64.4588L102.585 51.3732L116.801 64.4588L111.632 69.3053L106.624 65.2666V88.3683H99.0307V65.2666L94.5073 69.3053L89.4992 64.4588Z"
                  fill="#FEBC4B"
                />
                <path
                  d="M0.807754 27.9483L52.6656 0L105.008 27.9483L52.6656 55.412L16.3166 36.0258V82.5525H0V66.3974H9.36995V33.2795L0.807754 27.9483Z"
                  fill="#FEBC4B"
                />
                <path
                  d="M22.294 47.0113V62.8433L52.6656 79.483L66.7205 72.5364C66.7205 67.3129 67.3021 56.3813 69.6284 54.4427C71.9548 52.504 59.2892 59.2353 52.6656 62.8433L22.294 47.0113Z"
                  fill="#FEBC4B"
                />
              </svg>
              <div className="flex flex-col  justify-center">
                <span className=" font-extrabold  leading-5">NEXT SKILLS</span>
                <span className="font-semibold text-xs leading-3">Academy</span>
              </div>
            </div>
            <div className="mt-5 mb-4">
              <AppMainSearchBar />
            </div>
            <div className="p-2" onClick={() => handleNavigate("/")}>
              <span>Home</span>
            </div>
            <div className="p-2" onClick={() => handleNavigate("/Courses")}>
              <span>Courses</span>
            </div>
            <div className="p-2" onClick={() => handleNavigate("/contact-us")}>
              <span>Contact Us</span>
            </div>
            {/* <AppLink to="/" className="p-2">
            </AppLink>
            <AppLink to="/courses" className="p-2">
              <span>Courses</span>
            </AppLink>
            <AppLink to="/" className="p-2">
              <span>About Us</span>
            </AppLink>
            <AppLink to="/contact-us" className="p-2">
              <span>Contact Us</span>
            </AppLink> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default TheNavbar;
