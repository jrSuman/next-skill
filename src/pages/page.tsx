// import Image from "next/image";

// import LandingPage from "@/components/LandingPage";
// import UnderConstruction from "@/components/UnderConstruction";
import React from "react";
import LandingPage from "../components/LandingPage";

export default function HomePage() {
  return (
    <div className="flex min-h-[100vh_-_300px] w-full flex-col items-center justify-between">
      {/* <UnderConstruction /> */}
      {/* <div className="container"> */}
        <LandingPage />
      {/* </div> */}
    </div>
  );
}
