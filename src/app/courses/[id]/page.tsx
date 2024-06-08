import AppIcon from "@/components/ui/AppIcon"
import AppStatCard from "@/components/ui/AppStatCard"

const CourseDetails = () => {
  return(
    <div className="bg-blue-100">
      <div className="flex gap-10  h-[400px] relative">
        <div className="container mx-auto">
        <div className="lg:w-1/2 py-20">
          <div className="">
          <span className="text-yellow-500">FOR BEGINNERS AND EXPERIENCED LEARNERS</span>
          <h1 className="text-4xl font-black tracking-wider leading-10 mt-2 mb-6">Advanced Front End Web Development - React Js Course</h1>
          <p>Learn to build interactive web pages using React.js — The framework used by Facebook, Discord and more.</p>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-2 items-center">
              <AppIcon name="user" className="w-4 h-4" />
              <span>Beginner</span>
            </div>
            <div className="flex gap-2 items-center">
              <AppIcon name="envelope" className="w-4 h-4" />
              <span>Beginner</span>
            </div>
            {/* <AppStatCard label="Level" value="Beginner" icon="user"/> */}
          </div>
        </div>
        </div>
      </div>
      <div className="container mx-auto">
        
      </div>
    </div>
  )
}

export default CourseDetails