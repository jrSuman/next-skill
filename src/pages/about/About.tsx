import React from "react";
import AppInfoCard from "../../components/ui/AppInfoCard";
import ProfileCard from "./ProfileCard";


const teamData = [
  {
    name: 'Er. Simanta Kasaju',
    role: 'CEO and Co-Founder',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, adipisicing elit. Enim,',
    image: 'https://dcnepal.pythonanywhere.com/media/uploads/upload/Mask_group-removebg-preview.png',
    
  },
  {
    name: 'Er. Ashok Basnet',
    role: 'CEO and Co-Founder',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, adipisicing elit. Enim,',
    image: 'https://dcnepal.pythonanywhere.com/media/uploads/upload/424975021_414433311115552_7484989469156118292_n-removebg-preview.png',
  },
  {
    name: 'Er. Simanta Kasaju',
    role: 'CEO and Co-Founder',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, adipisicing elit. Enim,',
    image: 'https://dcnepal.pythonanywhere.com/media/uploads/upload/WhatsApp_Image_2025-03-30_at_5.10.04_PM-removebg-preview.png',
  },
  {
    name: 'Er. Ajesh Sen Thapa',
    role: 'CEO and Co-Founder',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, adipisicing elit. Enim,',
    image: 'https://dcnepal.pythonanywhere.com/media/uploads/upload/35629644-removebg-preview.png',
  },
  {
    name: 'Er. Simanta Kasaju',
    role: 'CEO and Co-Founder',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, adipisicing elit. Enim,',
    image: '',
  },
]


const About = () => {
  return (
    <div className="py-20 grid gap-32">
      <div className="grid grid-cols-2 gap-28">
        <div>
          <h1 className="text-gray-700 md:text-5xl text-4xl font-black mb-3 mf:leading-[60px] tracking-wider">
            We are build Bridge between companies ans students. Empowering
            students.
          </h1>
        </div>
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laborum, voluptas!
          </p>
        </div>
      </div>

      <div className="w-full h-[350px] bg-blue-100 rounded-lg">screen shot</div>

      <div className="grid grid-cols-2 gap-20">
        <div className="">
          <h3 class="text-gray-700 md:text-4xl text-3xl tracking-tight font-extrabold sm:text-5xl mb-4 mt-3">
            Our Vision
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            accusantium nobis reiciendis repudiandae, minima cupiditate saepe!
            Asperiores, accusantium natus voluptatum, sequi hic quos commodi
            voluptas, sed quidem corporis dolor assumenda.
          </p>
        </div>
        <div className="w-full h-[350px] bg-blue-100 rounded-lg">
          screen shot
        </div>
      </div>

      <div className="grid grid-cols-2 gap-20">
        <div className="w-full h-[350px] bg-blue-100 rounded-lg">
          screen shot
        </div>
        <div className="">
          <h3 class="text-gray-700 md:text-4xl text-3xl tracking-tight font-extrabold sm:text-5xl mb-4 mt-3">
            Our Mission
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            accusantium nobis reiciendis repudiandae, minima cupiditate saepe!
            Asperiores, accusantium natus voluptatum, sequi hic quos commodi
            voluptas, sed quidem corporis dolor assumenda.
          </p>
        </div>
      </div>


      <div className="flex flex-col text-center items-center gap-12">
        <div className="max-w-2xl">
          <h1 className="text-gray-700 md:text-5xl text-4xl font-black mb-3 mf:leading-[60px] tracking-wider">
            Our Instructors
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laborum, voluptas!
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
        {
          teamData.map((user, index) =>  <ProfileCard key={index} data={user} index={index}/>)
        }
      </div>
      </div>

     
    </div>
  );
};

export default About;
