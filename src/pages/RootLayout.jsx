import { useLayoutEffect } from "react";
import TheFooter from "../components/TheFooter"
import TheNavbar from "../components/TheNavbar"
import { useLocation } from "react-router-dom";

const RootLayout = ({comp: Component}) => {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return(
    // <span>Laout</span>
    <>
      <TheNavbar />
      <div className="bg-slate-50 min-h-[100vh]">
        <div className="container mx-auto text-gray-500 text-regular">
          <Component />
        </div>
      </div>
      <div className="" id="myPortal"></div>
      <TheFooter />
    </>
  )
}

export default RootLayout