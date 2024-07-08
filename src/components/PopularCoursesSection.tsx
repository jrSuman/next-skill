import AppExploreBtn from "./ui/AppExploreBtn";
import AppProductCard from "./ui/AppProductCard";

// import { courses } from "./dummyData.js";
import api from "@/app/pages/api/axios";
import { useEffect, useState } from "react";
import AppMultipleCardLoader from "./ui/AppMultipleCardLoader";

const PopularCoursesSection = () => {
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

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourse = async () => {
    setLoading(true);
    try {
      const res = await api.get("/course/");
      if (res.status == 200) {
        console.log("response", res);
        // setCoursesCategory(res.data)
        setCourses(res.data);
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
    <div className="min-h-screen w-full flex flex-col md:py-20 py-14 md:items-center items-start">
      <div className="flex flex-col gap-5 justify-center md:items-center mt-10 mb-12">
        <h3 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl  mb-2">
          Explore Our Offerings
        </h3>
        <div className="flex flex-wrap gap-3 md:justify-center">
          {coursesChips.map((elem) => (
            <span
              key={elem.id}
              className="px-5 py-1 border rounded-full bg-white border-gray-200 text-gray-500"
            >
              {elem.name}
            </span>
          ))}
        </div>
      </div>
      {loading && <><AppMultipleCardLoader /></>}
      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-8 mb-16">
        {courses.length > 0 &&
          courses.map((elem:any) => <AppProductCard key={elem.id} data={elem} />)}
      </div>
      <div className="mb-4">
        <AppExploreBtn>See All Our Courses</AppExploreBtn>
      </div>
    </div>
  );
};

export default PopularCoursesSection;
