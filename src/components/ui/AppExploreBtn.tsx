"use client"
// import { useRouter } from "next/navigation";
import React from "react";
import { useNavigate } from "react-router-dom";

const AppExploreBtn = ({props, children}: any) => {
  
  const navigate = useNavigate()

  return(
    <button className="inline-flex items-center whitespace-nowrap gap-4 pl-8 pr-8 py-4 bg-primary-500 text-white rounded-full text-lg" onClick={() => navigate("/courses")} type="button">
    <span>{children}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-arrow-right w-8 h-8"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
      />
    </svg>
  </button>
  )
  
}
export default AppExploreBtn