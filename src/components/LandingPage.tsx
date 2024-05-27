import Image from "next/image";
import AppButton from "./AppButton";
import heroImg from '@/assets/images/hero.png'

const LandingPage = () => {
  return (
    <div className="grid grid-cols-2 gap-20">
      <div className="border">
        <span>100% Quality Course</span>
        <h3>Find your prefect course and improve your skills.</h3>
        <p>We have 30+ courses, taught by Industry expert.</p>
        <AppButton>Explore all Courses</AppButton>
      </div>
      <div className="">
        <Image src={heroImg} alt="Hero image"/>
        {/* <img  alt="" /> */}
      </div>
    </div>
  );
};

export default LandingPage;
