import { FormEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AppInput } from "@/components/ui/AppInput";
import AppButton from "@/components/ui/AppButton";
// import api from "../pages/api/axios";
import AppModal from "@/components/ui/AppModal";
import AppIcon from "@/components/ui/AppIcon";
import api from "@/app/pages/api/axios";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    contact: yup.string().required(),
    description: yup.string().required(),
    academic_label: yup.string().required(),
    // course: yup.object().nullable()
  })
  .required();

const RegisterFormModal = (props:any) => {
  
  const [loading, setLoading] = useState<boolean>(false);
  const [tempUser, setTempUser] = useState<any>({
    // "id": 4,
    // "name": "Suman Sunuwar",
    // "email": "test@gmail.com",
    // "contact": "1234567890",
    // "course_name": "",
    // "course": null,
    // "ip": "",
    // "description": "test",
    // "extra": {}
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  // const [courses, setCourses] = useState([])
  const formRef = useRef<any>(null);
  const {
    handleSubmit,
    clearErrors,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      description: "",
      academic_label: "SEE/SLC",
      // course: props.selectedCourse
    },
  });

  // const fetchCourse = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await api.get(`/course`);
  //     if (res.status == 200) {
  //       // console.log("response", res.data[params.id - 1]);
  //       // setCourseCategory(res.data)
  //       setCourses(res.data);
  //       console.log('res', res.data)
  //       // setLoading(false);
  //     }
  //   } catch (error) {
  //     // console.log("eroor", error);
  //     // setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchCourse();
  // }, []);

  const onSubmit = async (data: any) => {
    setLoading(true);
    const formData: any = {
      name: data.name,
      email: data.email,
      contact: data.contact,
      course_name: props.selectedCourse.title,
      course: props.selectedCourse.id,
      ip: "",
      description: data.description,
      academic_label: data.academic_label,
    };

    // console.log("errors", errors)
    // console.log(formData)
    // return

    try {
      const res = await api.post("/enquiry/", formData);
      console.log("response", res);
      if (res.statusText == "Created") {
        setTempUser(res.data);
        setLoading(false);
        setIsModalOpen(false);
        setIsSuccessModalOpen(true);
      }
    } catch (error) {
      // console.log("eroor", error);
      setLoading(false);
    }
  };
  const onclose = () => {
    setIsModalOpen(false);
    setIsSuccessModalOpen(false);
    setTempUser({});
    reset();
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const triggerSubmit = () => {
    console.log('re', formRef.current.click())
  }
  return (
    <>
      <AppButton onClick={() => openModal()}>Register Now</AppButton>
      <AppModal
        isOpen={isModalOpen}
        onClose={() => onclose()}
        width="780"
        title="Admission Form"
        footerContent={
          <AppButton onClick={() => triggerSubmit()} loading={loading}>
            Submit Form
          </AppButton>
        } 
      >
        <form
          className="grid md:grid-cols-2 gap-5"
         
          onSubmit={handleSubmit(onSubmit)}
        >
          <AppInput
            label="Name"
            placeholder="Enter Your Name"
            onChange={(e: any) => setValue("name", e.target.value)}
            value={watch("name")}
            errorMessage={errors.name?.message}
            onFocus={() => clearErrors("name")}
          />
          <AppInput
            label="Email"
            placeholder="Enter Your Email"
            onChange={(e: any) => setValue("email", e.target.value)}
            value={watch("email")}
            errorMessage={errors.email?.message}
            onFocus={() => clearErrors("email")}
          ></AppInput>
          <AppInput
            label="Phone Number"
            placeholder="Phone Number"
            onChange={(e: any) => setValue("contact", e.target.value)}
            value={watch("contact")}
            errorMessage={errors.contact?.message}
            onFocus={() => clearErrors("contact")}
          ></AppInput>
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-500">Academic Label</label>
            <select
              onChange={(e: any) => setValue("academic_label", e.target.value)}
              value={watch("academic_label")}
              onFocus={() => clearErrors("academic_label")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 min-w-[320px] max-w-[900px]"
            >
              <option value="SEE/SLC">SEE/SLC</option>
              <option value="+2">+2</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Masters">Masters</option>
            </select>
            {errors.academic_label?.message && (
              <span className="text-sm mb-2 text-rose-500">
                {errors.academic_label?.message}
              </span>
            )}
          </div>

          {/* <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-500">Course</label>
            <select
              onChange={(e: any) => setValue("course", e.target.value)}
              value={watch("course")}
              onFocus={() => clearErrors("course")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 min-w-[320px] max-w-[900px]"
            >
              {
                courses && courses.map((elem:any) => (
                  <option value={elem} key={elem.id}>{elem.title}</option>
                ))
              }
            </select>
            {errors.course?.message && (
              <span className="text-sm mb-2 text-rose-500">
                {errors.course?.message}
              </span>
            )}
          </div> */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-500">Course</label>
            <input
              value={props.selectedCourse.title}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 min-w-[320px] max-w-[900px]"
              disabled
            >
              {/* {
                courses && courses.map((elem:any) => (
                  <option value={elem} key={elem.id}>{elem.title}</option>
                ))
              } */}
            </input>
          </div>
          
          <div className="md:col-span-2">
            <AppInput
              label="Message"
              placeholder="Enter Your Message(optional)"
              textarea
              onChange={(e: any) => setValue("description", e.target.value)}
              value={watch("description")}
              errorMessage={errors.description?.message}
              onFocus={() => clearErrors("description")}
            ></AppInput>
          </div>

          <div className="grid">
            <button type="submit" className="hidden"  ref={formRef}>
              Send Inquiry
            </button>
          </div>
        </form>
      </AppModal>
      <AppModal
        isOpen={isSuccessModalOpen}
        onClose={() => onclose()}
        width="480"
        // title="Enquiry"
        // footerContent={<AppButton onClick={() => onSubmit}>Close</AppButton>}
      >
        <div className="flex flex-col gap-10 mb-10 text-center items-center">
          <div className="w-16 h-16 bg-emerald-500 flex items-center justify-center rounded-full text-white">
            <AppIcon name="check2-circle" className="w-8 h-8" />
          </div>
          <p className="text-gray-500 leading-6">
            Dear, <strong>{tempUser.name}</strong> <br /> Registration successful. We, will follow up you
          </p>
        </div>
      </AppModal>
    </>
  );
};

export default RegisterFormModal;
