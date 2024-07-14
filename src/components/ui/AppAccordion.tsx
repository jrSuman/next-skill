import React, { useState } from "react";
import AppIcon from "./AppIcon";

const AppAccordion = ({ data }:any) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 cursor-pointer rounded-t-lg bg-gray-100" onClick={()=> setIsVisible(!isVisible)}>
        <span className="font-bold text-medium">{data.title}</span>
        <AppIcon name="expand-up-down-line" />
      </div>
      {isVisible && (
        <div className="px-4 py-2 flex flex-col gap-1 transition-all">
          {data.sections &&
            data.sections.length > 0 &&
            data.sections.map((elem:any, index:number) => (
              <div
                className="flex items-center py-2 gap-4"
                key={elem.section_title}
              >
                {/* <div className="w-6 h-6 bg-primary-50 flex items-center justify-center rounded-lg"> */}
                <span>{index + 1}.</span>
                {/* </div> */}
                <span>{elem.section_title}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default AppAccordion;
