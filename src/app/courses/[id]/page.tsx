"use client";
import api from "@/app/pages/api/axios";
import AppIcon from "@/components/ui/AppIcon";
import AppAccordion from "@/components/ui/AppAccordion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import EnquiryForm from "@/components/forms/EnquiryForm";
import RegisterFormModal from "@/components/forms/RegisterFormModal";

const CoursesMenu = [
  {
    id: 1,
    name: "Course Overview",
  },
  {
    id: 2,
    name: "Course Syllabus",
  },
  // {
  //   id: 3,
  //   name: "Career Path",
  // },
];

const CourseDetails = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const params = useParams<any>();

  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchCourse = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/course/${params.id}`);
      if (res.status == 200) {
        // console.log("response", res.data[params.id - 1]);
        // setCourseCategory(res.data)
        setCourse(res.data);
        // console.log('res', res.data)
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
    <>
      <div className="container mx-auto flex flex-col gap-5 py-5">
        <div className="w-full bg-slate-800 rounded-xl overflow-hidden md:p-10 p-6 mb-8 text-slate-200 relative flex items-center justify-between">
          <div className="md:w-7/12 w-full relative z-10">
            <h1 className="text-slate-200 md:text-4xl text-3xl tracking-tight font-extrabold  mb-4">
              {/* Javascript for Beginners */}
              {course.title}
            </h1>
            <p className="mb-10">{course.short_description}</p>

            <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-6">
                <AppIcon name="calendar" className="w-5 h-5 text-gray-300" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs">Duration</span>
                  <span>{course.duration}</span>
                </div>
              </div>
              <div className="flex items-start gap-5 ">
                <AppIcon name="calendar" className="w-5 h-5 text-gray-300" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs">Training Mode</span>
                  <span>Physical</span>
                </div>
              </div>

              <div className="flex items-start gap-5 md:grid-cols-3 col-span-2">
                <AppIcon name="briefcase" className="w-5 h-5 text-gray-300" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs">Career Path</span>
                  <span>Front End Developer, Full Stack Developer</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {/* <AppButton onClick={() => setIsModalOpen(true)}>
                Get Admission {JSON.stringify(isModalOpen)}
              </AppButton> */}
              <RegisterFormModal selectedCourse={course}>
                Get Admission
              </RegisterFormModal>
              {/* <AppButton outline>Send Inquiry</AppButton> */}
            </div>
          </div>

          <div className="w-[360px] aspect-video overflow-hidden border-2 border-gray-300 rounded-lg relative z-10 lg:block hidden">
            <img
              src={course.image}
              alt={course.image}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute -top-4 lg:right-1/3 right-4 w-[500px] h-[500px]">
            <Image
              src="/images/svg1.svg"
              alt="Hero image"
              className="w-full h-auto object-center object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 relative lg:items-start pb-20">
          <div className="flex-1 grow flex-col">
            <div className="flex gap-3 border-b sticky top-20 bg-gray-50/90 backdrop-blur-sm">
              {CoursesMenu.map((course, index) => (
                <div
                  className={`flex px-4 pb-3 pt-4 cursor-pointer text-sm font-semibold transition-all hover:bg-primary-100/30 rounded-t-lg  ${
                    activeIndex == index + 1
                      ? "border-b border-primary-400 text-primary-500 hover:opacity-90"
                      : "text-gray-500  hover:text-primary-400"
                  }`}
                  key={course.id}
                  onClick={() => setActiveIndex(course.id)}
                >
                  <span>{course.name}</span>
                </div>
              ))}
            </div>
            {activeIndex == 1 && (
              <div className="py-8">
                <h4 className="text-3xl font-semibold text-slate-900 mb-3">
                  Course Overview
                </h4>
                {/* {course.description} */}
                <div
                  dangerouslySetInnerHTML={{ __html: course.description }}
                  className="description"
                />
              </div>
            )}

            {activeIndex == 2 && (
              <div className="py-8">
                <h4 className="text-3xl font-semibold text-slate-900 mb-3">
                  Course Syllabus
                </h4>
                <div className="grid gap-4">
                  {course.extra.tab_data.length > 0 &&
                    course.extra.tab_data.map(
                      (elem:any) => <AppAccordion data={elem} key={elem.title} />
                      // <div className="" key={elem.title}>
                      //   <h3>{elem.title}</h3>
                      // </div>
                    )}
                </div>
              </div>
            )}

            {/* {activeIndex == 3 && (
            <div className="py-8">
              <h4 className="text-3xl font-semibold text-slate-900 mb-3">
                Course Path
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                fugiat quos earum magni, iure itaque deserunt quia odit cumque
                esse voluptatibus doloribus aspernatur sint eum laborum quam
                tempore impedit quis optio cupiditate beatae neque. Ea iure,
                eveniet reiciendis aperiam numquam et maiores commodi, dolorem
                nemo repellendus incidunt error placeat aspernatur cupiditate
                vero explicabo, beatae quis in veniam nam. Expedita iste
                exercitationem rem tempore veniam earum totam ea, deserunt
                obcaecati culpa nulla minima illo atque, nobis quis, similique
                laudantium. Nobis itaque maxime iusto molestiae a impedit
                pariatur tempora quae, voluptatem provident rerum dolorum beatae
                omnis in voluptas eaque, veritatis, nam assumenda?
              </p>
            </div>
          )} */}
          </div>
          <div className="lg:w-[420px] bg-white p-6 border border-gray-200 rounded-xl sticky top-20">
            <span className="text-lg font-bold text-gray-700">
              Quick Inquiry
            </span>
            <div className="grid gap-5 mt-2">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
