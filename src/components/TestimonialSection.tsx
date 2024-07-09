import Image from "next/image";
import TestimonialCard from "./ui/AppTestimonialCard";
import api from "@/app/pages/api/axios";
import { useEffect, useState } from "react";

const TestimonialSection = () => {
  const style = {
    // maskImage: "linear-gradient(to bottom, white, white, transparent)",
    // "-webkit-mask-image":
    //   "linear-gradient(to bottom, white, white, transparent)",
  };
 


  const [loading, setLoading] = useState(true);
  const [testimonial, setTestimonial] = useState([])
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  
  
  const fetchTestimonial = async () => {
    setLoading(true);
    try {
      const res = await api.get("/testomonial/");
      if (res.status == 200) {
        // console.log("teste response", res);
        setTestimonial(res.data)
        // setCoursesList(res.data);
        const firstColumn = res.data.filter((_:any, index:any) => index % 3 === 0);
        setData1(firstColumn)
        const secondColumn = res.data.filter((_:any, index:any) => index % 3 === 1);
        setData2(secondColumn)
        const thirdColumn = res.data.filter((_:any, index:any) => index % 3 === 2);
        setData3(thirdColumn)

        setLoading(false);
      }
    } catch (error) {
      console.log("eroor", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonial();
  }, []);
  
  if(loading) return;

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6 md:py-20 py-14" style={style}>
      <div className="xl:col-span-3 lg:col-span-2 flex items-center justify-center flex-col text-center lg:px-20">
        <h3 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl mb-4">
          What Our Client Says
        </h3>
        <p className="text-lg mb-14">
          I’ve written a few thousand words on why traditional “semantic class
          names” are the reason CSS is hard to maintain, but the truth is you’re
          never going to believe me until you actually try it. If you can
          suppress the urge to retch long enough to give it a chance, I really
          think you’ll wonder how you ever worked with CSS any other way.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {data1.map((elem:any) => (
         <TestimonialCard data={elem} key={elem.id}/>
        ))}
      </div>

      <div className="flex flex-col gap-6">
      {data2.map((elem:any) => (
         <TestimonialCard data={elem} key={elem.id}/>
        ))}
      </div>
      <div className="flex flex-col gap-6">
      {data3.map((elem:any) => (
         <TestimonialCard data={elem} key={elem.id}/>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
