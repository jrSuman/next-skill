// import Image from "next/image";
// import AppExploreBtn from "./ui/AppExploreBtn";
import AppIcon from "./ui/AppIcon";
import RegisterFormModal from "./forms/RegisterFormModal";
import api from "@/app/pages/api/axios";
import { useEffect, useState } from "react";

const UpcomingSection = () => {
  const [course, setCourse] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const fetchCourse = async () => {
    setLoading(true);
    try {
      const res = await api.get("/event/");
      if (res.status == 200) {
        console.log("event", res);
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

  if (loading) return;

  return (
    <div className="md:py-20 py-14">
      <div className="  rounded-xl grid lg:grid-cols-5 md:grid-cols-2 lg:gap-10 gap-8 border border-gray-200 overflow-hidden bg-white">
        <div className="bg-gray-500/20 lg:col-span-2">
          {/* <Image
            src="/images/img2.jpg"
            alt="Hero image"
            className="w-full h-full object-center object-cover"
            width={520}
            height={520}
          /> */}
          <img
            src={course.image}
            alt={course.image}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="p-10 lg:col-span-3 flex flex-col items-start">
          {/* <span>Upcoming Events</span> */}
          <span className="text-2xl text-emerald-500 font-medium">Free</span>
          <h3 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl mb-4 mt-3">
            {course.title}
          </h3>
          <span className="text-gray-500 text-lg mb-12">
            {course.short_description}
          </span>

          {/* <AppExploreBtn>Register Now</AppExploreBtn> */}
          <RegisterFormModal selectedCourse={course}>
            Register Now
          </RegisterFormModal>

          <div className="flex flex-col gap-5 mt-16">
            <div className="flex items-start gap-5">
              <AppIcon name="calendar" className="w-5 h-5 text-gray-500 mt-1" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">Session Date</span>
                <span>{course.event_date}</span>
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
