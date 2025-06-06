import Image from "next/image";

interface PropsInterface {
  id?: Number | String;
  img?: String;
  name?: String;
  title?: String;
  testimonial?: String;
}

const TestimonialCard = (props: any) => {
  const { data } = props;
  return (
    <div
      className="w-full border border-gray-200 rounded-lg p-6 flex flex-col gap-5 bg-white"
      key={data.id}
    >
      <div className="pb-4 flex flex-col gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-quote w-10 h-10 text-blue-500"
          viewBox="0 0 16 16"
        >
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
        </svg>
        <span>{data.description}</span>
      </div>
      <div className="flex gap-x-5 items-start">
        <div className="w-12 h-12  rounded-full overflow-hidden">
          <img src={data.image} alt={data.image} className="w-full h-full object-center object-cover"/>
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-base text-slate-700 font-semibold leading-7">
            {data.name}
          </span>
          {
            data.short_description &&
          <span className="text-sm">{data.short_description}</span>
          }
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
