import { FormEvent, useState } from "react";
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
  })
  .required();

const EnquiryForm = () => {
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
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    const formData: any = {
      name: data.name,
      email: data.email,
      contact: data.contact,
      course_name: "",
      course: null,
      ip: "",
      description: data.description,
      extra: {},
    };

    try {
      const res = await api.post("/enquiry/", formData);
      console.log("response", res);
      if (res.statusText == "Created") {
        setTempUser(res.data);
        setLoading(false);
        setIsModalOpen(true);
      }
    } catch (error) {
      // console.log("eroor", error);
      setLoading(false);
    }
  };
  const onclose = () => {
    setIsModalOpen(false);
    setTempUser({});
    reset();
  };
  return (
    <>
      <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
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
        <AppInput
          label="Message"
          placeholder="Enter Your Message(optional)"
          textarea
          onChange={(e: any) => setValue("description", e.target.value)}
          value={watch("description")}
          errorMessage={errors.description?.message}
          onFocus={() => clearErrors("description")}
        ></AppInput>

        <div className="grid">
          <AppButton type="submit" loading={loading}>
            Send Inquiry
          </AppButton>
        </div>
      </form>
      <AppModal
        isOpen={isModalOpen}
        onClose={() => onclose()}
        width="480"
        // title="Enquiry"
        // footerContent={<AppButton onClick={() => onSubmit}>Close</AppButton>}
      >
        <div className="flex flex-col gap-10 mb-10 text-center items-center">
          <div className="w-16 h-16 bg-emerald-500 flex items-center justify-center rounded-full text-white">
            <AppIcon name="check2-circle" className="w-8 h-8" />
          </div>
          <p className="text-gray-500 leading-5">
            Dear, <strong>{tempUser.name}</strong> your enquiry has been
            successfully sent. We, will follow up you
          </p>
        </div>
      </AppModal>
    </>
  );
};

export default EnquiryForm;
