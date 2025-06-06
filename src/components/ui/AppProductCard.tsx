import { Link, useNavigate } from "react-router-dom";
import AppButton from "./AppButton";
import React from "react";

const AppProductCard = ({ data }: any) => {

  const navigate = useNavigate()
  return (
    <div className="border border-gray-200 w-full h-full rounded-xl overflow-hidden  p-2 cursor-pointer hover:shadow-lg transition-all bg-white relative">
      <div className="w-full aspect-video bg-blue-50 rounded-lg mb-2 overflow-hidden">
        <img
          src={data.image}
          alt={data.image}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col p-2">
        <div className="h-36 overflow-hidden mb-4">
          <h4 className="text-lg font-bold text-gray-700 mb-3">
            {/* CCNA 2020 200-125 Video Boot Camp With Chris Bryant */}
            {data.title}
          </h4>

          <div className="inline-flex gap-2 text-sm text-gray-600 items-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-clock w-4 h-4"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
            <span>{data.duration}</span>
          </div>

          <div className="text-sm text-gray-500">
            <span className=" line-clamp-2">{data.short_description}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          
          {data.level === 'BEGINNER' && (
            <span className="text-green-500 bg-green-50 px-2 py-0.5 text-sm rounded">
              Beginner
            </span>
          )}
          {data.level === 'INTERMEDIATE' && (
            <span className="text-indigo-500 bg-indigo-50 px-2 py-0.5 text-sm rounded">
              Intermediate
            </span>
          )}
          {data.level == 'ADVANCED' && (
            <span className="text-purple-500 bg-purple-50 px-2 py-0.5 text-sm rounded">
              ADVANCED
            </span>
          )}
        </div>

        {/* <div className="inline-flex gap-3 text-sm text-gray-500">
          <span>Time <strong>{data.time}</strong></span>
        </div> */}
        {/* <div className="">Time: 10:30 - 11:30</div> */}
      </div>

      <Link className="absolute inset-0" to={`/courses/${data.id}`}></Link>
    </div>
  );
};

export default AppProductCard;
