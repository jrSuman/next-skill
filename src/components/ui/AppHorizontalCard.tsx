// import Image from "next/image";

import AppButton from "./AppButton";

const AppHorizontalCard = ({ data }) => {
  return (
    <div className="border w-full h-[240px] rounded-xl overflow-hidden  p-2 cursor-pointer hover:shadow-lg transition-all flex gap-4">
      <div className="h-full aspect-video bg-yellow-500 rounded-lg mb-2 overflow-hidden">
        <img
          src={data.image}
          alt={data.image}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col pl-2 py-2 pr-6">
        <div className="h-36 overflow-hidden">
          <h4 className="text-xl font-bold text-gray-700 mb-3">
            {/* CCNA 2020 200-125 Video Boot Camp With Chris Bryant */}
            {data.title}
          </h4>

          <div className="inline-flex gap-2 text-sm text-gray-600 items-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-calendar4-week w-4 h-4"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
              <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
            </svg>
            <span>23 April 2024</span>
          </div>

          <div className="text-sm text-gray-500">
            <span className=" line-clamp-2">{data.description}</span>
          </div>
        </div>

        <div className="inline-flex">
          <AppButton>Register Now</AppButton>
        </div>
      </div>
    </div>
  );
};

export default AppHorizontalCard;
