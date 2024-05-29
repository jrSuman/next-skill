import AppButton from "./AppButton";
import AppMainSearchBar from "./AppMainSearchBar";

const TheNavbar = () => {
  return (
    <div className="bg-white py-3 flex border-b sticky top-0 z-10">
      <div className="container flex mx-auto justify-between gap-x-32">
        <div className="flex gap-x-10 items-center grow">
          <div className="flex gap-3">
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
          {/* <AppButton text>Categories</AppButton> */}
          <div className="px-3 flex gap-x-2 items-center cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-grid"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
              </svg>
            </span>
            <span className="font-semibold">Categories</span>
          </div>
          <div className="flex flex-1">
            <AppMainSearchBar />
          </div>
        </div>

        <div className="links">
          <AppButton>Send Enquiry</AppButton>
        </div>
      </div>
    </div>
  );
};

export default TheNavbar;
