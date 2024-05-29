import Image from "next/image";
// import heroImage from "@/assets/images/underConstruction.jpeg";

const UnderConstruction = () => {
  return (
    <div className="h-auto bg-white w-full lg:p-0 p-4">
      <div className="container flex md:flex-row flex-col justify-between mx-auto md:gap-20 gap-4">
        <div className="flex flex-col py-10 gap-10 grow justify-center items-start">
          <div className="flex flex-col justify-center gap-3 items-start">
            <div className="flex gap-4 mb-5">
              <svg
                className="w-12 h-auto"
                viewBox="0 0 134 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M103.877 39.4184C90.4685 39.4184 71.5195 50.2872 72.8594 70.2746C74.5706 95.7997 95.7997 100 103.716 100C110.985 100 133.279 94.0226 133.279 69.3053C133.279 45.986 115.509 40.5652 103.877 39.4184ZM89.4992 64.4588L102.585 51.3732L116.801 64.4588L111.632 69.3053L106.624 65.2666V88.3683H99.0307V65.2666L94.5073 69.3053L89.4992 64.4588Z"
                  fill="#FEBC4B"
                />
                <path
                  d="M0.807754 27.9483L52.6656 0L105.008 27.9483L52.6656 55.412L16.3166 36.0258V82.5525H0V66.3974H9.36995V33.2795L0.807754 27.9483Z"
                  fill="#FEBC4B"
                />
                <path
                  d="M22.294 47.0113V62.8433L52.6656 79.483L66.7205 72.5364C66.7205 67.3129 67.3021 56.3813 69.6284 54.4427C71.9548 52.504 59.2892 59.2353 52.6656 62.8433L22.294 47.0113Z"
                  fill="#FEBC4B"
                />
              </svg>
              <div className="flex flex-col  justify-center">
                <span className=" font-extrabold text-lg leading-5">
                  NEXT SKIllS
                </span>
                <span className="font-semibold text-sm leading-4">Academy</span>
              </div>
            </div>
            <h1 className="text-6xl font-bold text-gray-700 mt-10 mb-2">
              We are tidying up!
            </h1>
            <span className="text-gray-500 text-lg">
              Sorry for the inconvenience.
            </span>
            <span className="text-gray-500 text-lg">
              Our Website is undergoing scheduled maintenance. <br /> Thank you
              for patience
            </span>
          </div>
        </div>
        <div className="py-10 md:w-2/5 w-full">
          <Image
            src={'/assets/images/underConstruction.jpeg'}
            alt="Under construction"
            className="w-full h-auto"
            width={320}
            height={320}
          />
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
