const AppProductCardLoader = () => {
  return (
    <div className="bg-white min-w-[320px] grid rounded-xl border border-gray-100 p-2 gap-6 animate-pulse">
      <div className="w-full aspect-video bg-gray-200 rounded-lg"></div>
      <div className=" grid gap-4">
        <div className="h-10 flex bg-gray-100 rounded"></div>
        <div className="h-24 bg-gray-50 rounded"></div>
      </div>
    </div>
  );
};

export default AppProductCardLoader;
