import Image from "next/image";
import AppButton from "./ui/AppButton";

const AboutSection = () => {
  return (
    <div className="bg-blue-50 rounded-2xl grid lg:grid-cols-5 overflow-hidden lg:p-10 p-5 gap-20 relative">
      <div className="col-span-3 ">
        <h3 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl mb-4">About Us</h3>
        <p className="text-gray-500 text-lg mb-14">
          Being the best IT college in Nepal, we are an avid follower of
          education based on practical approach. The college recognizes the fact
          that in order to be successful in finding a rewarding career, real
          life skills are also essential. For this reason, classes are held on
          personality development, presentation skills and public speaking
          skills. This combination of both academic and real life skills would
          thus help students towards their holistic development. With a view to
          provide real time work experience right after the completion of the
          first year, students are provided with internship opportunities with
          renowned Companies in Nepal. Similarly, after the completion of second
          year students are placed in various companies in Nepal and abroad in
          positions according to their skill level.
        </p>
        <AppButton>Contact Us</AppButton>
      </div>
      <div className="col-span-2 rounded-2xl flex items-center">
      <Image
              src="/images/img4.png"
              alt="Hero image"
              className="w-full h-auto object-center object-cover"
              width={500}
              height={500}
            />
       </div>
    </div>
  );
};

export default AboutSection;
