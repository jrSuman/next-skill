import AppIcon from "./ui/AppIcon";
import AppLink from "./ui/AppLink";

const TheFooter = () => {
  return (
    <div className="bg-slate-800 text-gray-300 pt-20 text-sm font-normal">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10 pb-10">
          <div className="col-span-2">
            <div className="flex flex-col gap-5">
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
                  <span className="font-semibold text-sm leading-4">
                    Academy
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-semibold">Contact Us</span>
                <div className="flex flex-col gap-3">
                  <div className="inline-flex gap-x-4 items-center">
                    <AppIcon name="telephone" className="w-4 h-4" />
                    <span>+01-5454439</span>
                  </div>
                  <div className="inline-flex gap-x-4 items-center">
                    <AppIcon name="envelope" className="w-4 h-4" />
                    <span>nextskillsacademy@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-semibold">Socail Media</span>
                <div className="flex flex gap-3">
                  <div className="inline-flex gap-x-4 items-center">
                    <AppIcon name="telephone" className="w-4 h-4" />
                  </div>
                  <div className="inline-flex gap-x-4 items-center">
                    <AppIcon name="envelope" className="w-4 h-4" />
                  </div>
                  <div className="inline-flex gap-x-4 items-center">
                    <AppIcon name="envelope" className="w-4 h-4" />
                  </div>
                  <div className="inline-flex gap-x-4 items-center">
                    <AppIcon name="envelope" className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-3">
              <AppLink to="/" className="">
                Home
              </AppLink>
              <AppLink to="/" className="">
                Courses
              </AppLink>
              <AppLink to="/" className="">
                About
              </AppLink>
              <AppLink to="/" className="">
                Career
              </AppLink>
              <AppLink to="/" className="">
                Blog
              </AppLink>
              <AppLink to="/" className="">
                Terms & Conditions
              </AppLink>
              <AppLink to="/" className="">
                Privacy Policies
              </AppLink>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 items-center py-2">
          <span>
            &copy; Copyright 2023 to 20204 Next Skill Academy Pvt.Lts. All
            rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default TheFooter;
