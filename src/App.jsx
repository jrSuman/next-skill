// import HomePage from "./HomePage/views"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import ErrorPage from "./views/error-page";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/page";
import Courses from "./pages/courses";
import CourseDetails from "./pages/courses/CourseDetails";
import ContactUs from "./pages/contactUs";
// import HomePage from "./pages/HomePage";
// import ComingSoon from "./views/comming-soon";
// import TheFooter from "./components/TheFooter";
// import TheNavbar from "./components/TheNavbar";
// import TheNavBar from "./components/TheNavBar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout  comp={HomePage}/>,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/courses",
    element: <RootLayout  comp={Courses}/>,
  },
  {
    path: "/courses/:id",
    element: <RootLayout  comp={CourseDetails}/>,
  },
  {
    path: "/contact-us",
    element: <RootLayout  comp={ContactUs}/>,
  },
]);


function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
