import Image from "next/image";
import TestimonialCard from "./ui/AppTestimonialCard";

const TestimonialSection = () => {
  const style = {
    // maskImage: "linear-gradient(to bottom, white, white, transparent)",
    // "-webkit-mask-image":
    //   "linear-gradient(to bottom, white, white, transparent)",
  };
  const data = [
    {
      id: 1,
      img: "user1.png",
      name: "Sagar Rai",
      title: "Backend Developer, Laravel",
      testimonial:
        "The JavaScript course at Next Skills Academy was exactly what I needed to advance my skills. The course material was comprehensive and up-to-date with the latest JavaScript features and frameworks. The interactive lessons and coding challenges kept me engaged and motivated. The instructors were knowledgeable and provided excellent support throughout the course. I now feel confident in my ability to build dynamic and responsive web applications.",
    },
    {
      id: 2,
      img: "user2.png",
      name: "Mukesh Rai",
      title: "Technical Forensic Expert, Sub Inspector",
      testimonial:
        "Next Skills Academy's full-stack development course is exceptional. The industry-professional instructors and real-world projects have prepared me for complex web development tasks. Highly recommend!",
    },
    {
      id: 3,
      img: "user3.png",
      name: "Bijaya Limbu",
      title: "Technical Content Writer",
      testimonial:
        "The UI/UX design program was a career game-changer. Up-to-date content, hands-on projects, and supportive mentors helped me build a strong portfolio and gain confidence in my design skills.",
    },
  ];
  const data2 = [
    {
      id: 2,
      img: "user2.png",
      name: "Mukesh Rai",
      title: "Technical Forensic Expert, Sub Inspector",
      testimonial:
        "The Python programming course was fantastic. From basics to advanced topics, the interactive sessions and real-time exercises made learning enjoyable and effective. The instructors' support was top-notch.",
    },
    {
      id: 3,
      img: "user3.png",
      name: "Bijaya Limbu",
      title: "Technical Content Writer",
      testimonial:
        "The web development bootcamp was incredible. Covering HTML, CSS, JavaScript, and frameworks, the hands-on curriculum and outstanding instructor support prepared me for a successful career in web development.",
    },
    {
      id: 4,
      img: "user4.png",
      name: "Ahsok Basnet",
      title: "Assistent Proffessor, NCIT",
      testimonial:
        "I had an incredible experience with the web development bootcamp at Next Skills Academy. The intensive program covered HTML, CSS, JavaScript, and various frameworks like React and Node.js. The curriculum was hands-on, with plenty of coding assignments and projects that simulated real-world scenarios. The support from the instructors and the community was outstanding, making it easy to overcome any challenges. This bootcamp has truly prepared me for a successful career in web development.",
    },
  ];

  const data3 = [
    {
      id: 3,
      img: "user3.png",
      name: "Bijaya Limbu",
      title: "Technical Content Writer",
      testimonial:
        "Enrolling in the UI/UX design program at Next Skills Academy was a game-changer for my career. The course content was up-to-date with the latest industry trends and best practices. The hands-on approach, including designing real-world projects, helped me build a strong portfolio. The mentors were always available to provide constructive feedback and support, making the learning process smooth and enjoyable. I've gained the confidence to take on any design challenge thanks to Next Skills Academy.",
    },
    {
      id: 4,
      img: "user4.png",
      name: "Ahsok Basnet",
      title: "Assistent Proffessor, NCIT",
      testimonial:
        "The Python programming course was fantastic. From basics to advanced topics, the interactive sessions and real-time exercises made learning enjoyable and effective. The instructors' support was top-notch.",
    },
     {
      id: 1,
      img: "user1.png",
      name: "Sagar Rai",
      title: "Backend Developer, Laravel",
      testimonial:
        "The web development bootcamp was incredible. Covering HTML, CSS, JavaScript, and frameworks, the hands-on curriculum and outstanding instructor support prepared me for a successful career in web development.",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 gap-6 md:py-20 py-14" style={style}>
      <div className="lg:col-span-3 flex items-center justify-center flex-col text-center lg:px-20">
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
        {data.map((elem) => (
         <TestimonialCard data={elem} key={elem.id}/>
        ))}
      </div>

      <div className="flex flex-col gap-6">
      {data2.map((elem) => (
         <TestimonialCard data={elem} key={elem.id}/>
        ))}
      </div>
      <div className="flex flex-col gap-6">
      {data3.map((elem) => (
         <TestimonialCard data={elem} key={elem.id}/>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
