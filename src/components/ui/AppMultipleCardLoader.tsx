import AppProductCardLoader from "./AppProductCardLoader";

const AppMultipleCardLoader = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-8 mb-16 w-full">
      <AppProductCardLoader />
      <AppProductCardLoader />
      <AppProductCardLoader />
    </div>
  );
};

export default AppMultipleCardLoader;
