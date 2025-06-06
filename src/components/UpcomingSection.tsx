// import Image from "next/image";
// import AppExploreBtn from "./ui/AppExploreBtn";
import AppIcon from "./ui/AppIcon";
import RegisterFormModal from "./forms/RegisterFormModal";
// import api from "@/app/pages/api/axios";
import React, { useEffect, useState } from "react";
import api from "../api/axios";

const UpcomingSection = () => {
  const [course, setCourse] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const fetchCourse = async () => {
    setLoading(true);
    try {
      const res = await api.get("/event/");
      if (res.status == 200) {
        // console.log("event", res);
        // setCoursesCategory(res.data)
        setCourse(res.data[0]);
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

  const formatDate = (elem: any) => {
    // console.log('toLocaleDateString', date.split('T'))
    // formatDate
    const date = new Date(elem);
    const year = date.getFullYear();
    let month: any = date.getMonth() + 1;
    let dt: any = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }

    // console.log(year + "-" + month + "-" + dt + ' ' + hour +':'+minute);

    return year + "-" + month + "-" + dt + ' ' + hour +':'+minute
  };

  if (loading) return;

  return (
    <div className="md:py-20 py-14">
      <div className="  rounded-xl grid lg:grid-cols-5 md:grid-cols-2 lg:gap-10 md:gap-8 border border-gray-200 overflow-hidden bg-white">
        <div className="bg-gray-500/20 lg:col-span-2">
          <img
            src={course.image}
            alt={course.image}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="md:p-10 p-6 lg:col-span-3 flex flex-col items-start">
          {/* <span>Upcoming Events</span> */}
          <span className="text-2xl text-emerald-500 font-medium">Free</span>
          <h3 className="text-gray-700 md:text-4xl text-3xl tracking-tight font-extrabold sm:text-5xl mb-4 mt-3">
            {course.title}
          </h3>
          <span className="text-gray-500 text-lg mb-12">
            {course.short_description}
          </span>

          {/* <AppExploreBtn>Register Now</AppExploreBtn> */}
          <RegisterFormModal selectedCourse={course} isEvent>
            Register Now
          </RegisterFormModal>

          <div className="flex flex-col gap-5 mt-16">
            <div className="flex items-start gap-5">
              <AppIcon name="calendar" className="w-5 h-5 text-gray-500 mt-1" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">Session Date</span>
                <span>{formatDate(course.event_date)}</span>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <AppIcon name="location" className="w-5 h-5 text-gray-500 mt-1" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">Location</span>
                <span>Near Balkumari Mandir, Next Skill Academy.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSection;
