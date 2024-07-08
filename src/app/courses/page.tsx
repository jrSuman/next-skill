"use client";
import AppHorizontalCard from "@/components/ui/AppHorizontalCard";
import {AppInput} from "@/components/ui/AppInput";
import AppProductCard from "@/components/ui/AppProductCard";
import { useEffect, useState } from "react";
import api from "../pages/api/axios";
import AppMultipleCardLoader from "@/components/ui/AppMultipleCardLoader";

const Courses = () => {
  const coursesCategory = [
    {
      id: 1,
      categoryName: "Development",
      children: [
        {
          id: 1,
          name: "Web Development",
        },
        {
          id: 2,
          name: "Mobile Development",
        },
        {
          id: 3,
          name: "Game Development",
        },
        {
          id: 4,
          name: "Data Science",
        },
      ],
    },
    {
      id: 2,
      categoryName: "Designing",
      children: [
        {
          id: 1,
          name: "UI/UX Design",
        },
        {
          id: 2,
          name: "Graphics Design",
        },
        {
          id: 3,
          name: "Web Design",
        },
      ],
    },
    {
      id: 3,
      categoryName: "It And Software",
      children: [
        {
          id: 1,
          name: "IT Certification",
        },
        {
          id: 2,
          name: "Network & Security",
        },
        {
          id: 3,
          name: "Operating Systems",
        },
      ],
    },
    {
      id: 4,
      categoryName: "Office Products",
      children: [
        {
          id: 1,
          name: "Microsoft",
        },
        {
          id: 2,
          name: "Google",
        },
      ],
    },
  ];

  // const coursesList = [
  //   {
  //     id: 1,
  //     title: "Data Science With Python Data Science With Python",
  //     image: "https://img-c.udemycdn.com/course/480x270/10812_b0af_6.jpg",
  //     description:
  //       "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
  //     duration: 3,
  //     time: ["2:30 - 3:30 am", "2:30 - 3:30 am"],
  //     level: 0,
  //   },
  //   {
  //     id: 2,
  //     title: "Python with Django",
  //     image: "https://img-c.udemycdn.com/course/480x270/16429_c92e_5.jpg",
  //     description:
  //       "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
  //     duration: 3,
  //     time: ["2:30 - 3:30 am", "2:30 - 3:30 am"],
  //     level: 1,
  //   },
  //   {
  //     id: 3,
  //     title: "MERN Stack Training",
  //     image: "https://img-c.udemycdn.com/course/480x270/16429_c92e_5.jpg",
  //     description:
  //       "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
  //     duration: 3,
  //     time: ["2:30 - 3:30 am", "2:30 - 3:30 am"],
  //     level: 2,
  //   },
  //   {
  //     id: 4,
  //     title: "React Stack Training",
  //     image: "https://img-c.udemycdn.com/course/480x270/16429_c92e_5.jpg",
  //     description:
  //       "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
  //     duration: 3,
  //     time: ["2:30 - 3:30 am", "2:30 - 3:30 am"],
  //     level: 2,
  //   },
  //   {
  //     id: 5,
  //     title: "UI/UX Training",
  //     image: "https://img-c.udemycdn.com/course/480x270/16429_c92e_5.jpg",
  //     description:
  //       "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
  //     duration: 3,
  //     time: ["2:30 - 3:30 am", "2:30 - 3:30 am"],
  //     level: 0,
  //   },
  //   {
  //     id: 6,
  //     title: "Python with Django",
  //     image: "https://img-c.udemycdn.com/course/480x270/16429_c92e_5.jpg",
  //     description:
  //       "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
  //     duration: 3,
  //     time: ["2:30 - 3:30 am", "2:30 - 3:30 am"],
  //     level: 1,
  //   },
  //   // {
  //   //   id: 7,
  //   //   title: "MERN Stack Training",
  //   //   image: "https://img-c.udemycdn.com/course/480x270/16429_c92e_5.jpg",
  //   //   description:
  //   //   "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
  //   //   duration: 3,
  //   //   time: ['2:30 - 3:30 am','2:30 - 3:30 am'],
  //   //   level: 2
  //   // },
  //   // {
  //   //   id: 8,
  //   //   title: "React Stack Training",
  //   //   image: "https://img-c.udemycdn.com/course/480x270/16429_c92e_5.jpg",
  //   //   description:
  //   //   "Join The 90,000+ Students Who Are Learning Real-World Skills AND Earning Their CCNA!",
  //   //   duration: 3,
  //   //   time: ['2:30 - 3:30 am','2:30 - 3:30 am'],
  //   //   level: 2
  //   // },
  // ];

  const [coursesList, setCoursesList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourse = async () => {
    setLoading(true);
    try {
      const res = await api.get("/course/");
      if (res.status == 200) {
        console.log("response", res);
        // setCoursesCategory(res.data)
        setCoursesList(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log("eroor", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <div className="container mx-auto flex flex-col gap-5">
      {/* <div className="h-60 w-full bg-red-500/50 rounded-xl overflow-hidden"></div> */}
      <div className="flex gap-10">
        {/* <div className="w-[240px] border-r pr-5 py-5 md:flex hidden flex-col gap-4">
          <div className="px-3 py-2 flex items-center cursor-pointer hover:bg-primary-50/50 rounded-lg">
            <span>All Courses</span>
          </div>
          {coursesCategory.map((category) => {
            return (
              <div className="" key={category.id}>
                <div className="border-b pb-1">
                  <span className="text-sm font-semibold">
                    {category.categoryName}
                  </span>
                </div>
                <div className="flex flex-col py-2">
                  {category.children &&
                    category.children.length > 0 &&
                    category.children.map((item) => {
                      return (
                        <div
                          className="px-3 py-2 flex items-center cursor-pointer hover:bg-primary-50/50 rounded-lg"
                          key={item.id}
                        >
                          <span className="">{item.name}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div> */}

        <div className="flex-1 py-10">
          {/* <div className="flex flex-col rounded-2xl mb-10">
            <h3 className="text-3xl font-semibold">Popular Class</h3>
              <AppHorizontalCard data={coursesList[2]}/>
            </div> */}
          <div className="flex justify-between md:flex-row flex-col md:items-center pb-4 md:gap-10 gap-4">
            <h3 className="text-3xl font-semibold">Courses</h3>
            {/* <div className=""> */}
            <AppInput placeholder="Search"/>
            {/* </div> */}
          </div>
          {loading && (
            <>
              <AppMultipleCardLoader />
            </>
          )}
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {coursesList.length > 0 &&
              coursesList.map((item:any) => {
                return <AppProductCard key={item.id} data={item} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
