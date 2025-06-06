import React from "react"
import image from "../../assets/images/team/ashok_bashnet.png"

const ProfileCard = ({data, index}) => {
  const bgColors = ['#f87171', '#fb923c', '#4ade80', '#34d399', '#2dd4bf' , '#38bdf8' , '#818cf8' , '#c084fc']
  const backgroundColor = bgColors[index % bgColors.length]
  return(
    <div className="p-2 bg-white rounded-lg text-left">
    <div className={`w-ful aspect-square rounded-md relative overflow-hidden`} >
      <div className="absolute inset-0" style={{backgroundColor: backgroundColor, opacity: 0.5}} />
      <div className=" absolute bottom-0 left-3 right-3 top-4">
        <img src={data.image} alt="" className="w-full h-full object-contain object-bottom"/>
      </div>
    </div>
    <div className="p-4">
      <div className="flex flex-col flex-1">
        <span className="text-base text-slate-700 font-semibold leading-7">
          {data.name}
        </span>

        <span className="text-xs line-clamp-2">
          {data.description}
        </span>

        <div className="">
          <span></span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfileCard