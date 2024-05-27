// "use client";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import ClientPortal from "./ClientPortal";
// import { useEffect, useState } from "react";
// import { SET_NOTIFICATION } from "@/store/slice/notificationSlice";
// import { animated, useSpringRef, useSpring } from "@react-spring/web";

// const AppToast = () => {
//   const [notificationMsg, setNotificationMsg] = useState({
//     show: false,
//     type: "",
//     message: "",
//   });
//   const dispatch = useDispatch();
//   const { notification } = useSelector(
//     (state: any) => ({
//       notification: state.notification,
//     }),
//     shallowEqual
//   );

//   const api = useSpringRef();
//   const springs = useSpring({
//     ref: api,
//     from: {
//       opacity: 0,
//       x: "-50%",
//       y: -100,
//       config: {
//         mass: 5,
//         friction: 10,
//         tension: 120,
//       },
//     },
//   });

//   const handleAnimate = () => {
//     api.start({
//       to: {
//         opacity: 1,
//         y: 0,
//       },
//     });
//   };

//   const handleClose = () => {
//     api.start({
//       to: {
//         opacity: 0,
//         y: -100,
//       },
//     });
//   };

//   const clearNotification = () => {
//     handleClose();
//     setTimeout(() => {
//       dispatch(SET_NOTIFICATION({ type: "CLEAR_NOTIFICATION" }));
//     }, 100);
//   };

//   useEffect(() => {
//     if (!notification.show) return;
//     setNotificationMsg({
//       show: notification.show,
//       type: notification.type,
//       message: notification.message,
//     });
//     handleAnimate();

//     let timer1 = setTimeout(() => clearNotification(), 5000);
//     return () => {
//       clearTimeout(timer1);
//     };
//   }, [notification]);

//   return (
//     <ClientPortal selector="myPortal">
//       <animated.div
//         className="fixed top-2 left-1/2 -translate-x-1/2 z-50"
//         style={{
//           ...springs,
//         }}
//       >
//         <div className="relative bg-white pl-4 pr-6 py-3 flex items-start rounded-2xl shadow-lg gap-3 justify-center transition-all">
//           {notificationMsg.type === "success" && (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               className="bi bi-patch-check w-6 h-6 text-green-400"
//               viewBox="0 0 16 16"
//             >
//               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//             </svg>
//           )}

//           {notificationMsg.type === "error" && (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               className="bi bi-patch-check w-6 h-6 text-red-400"
//               viewBox="0 0 16 16"
//             >
//               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
//             </svg>
//           )}

//           {notificationMsg.type === "info" && (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               className="bi bi-patch-check w-6 h-6 text-yellow-400"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
//             </svg>
//           )}

//           <div className="flex flex-col min-w-[200px] max-w-[300px] gap-2">
//             <span className="font-semibold font-sm leading-4">
//               {notificationMsg.type}
//             </span>
//             <span className="text-xs text-gray-500">
//               {notificationMsg.message}
//             </span>
//           </div>

//           <button
//             type="button"
//             className="absolute top-2 right-2 text-gray-400 hover:text-gray-500 cursor-pointer p-1"
//             onClick={() => handleClose()}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               className="bi bi-x-lg w-3 h-3"
//               viewBox="0 0 16 16"
//             >
//               <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
//             </svg>
//           </button>
//         </div>
//       </animated.div>
//     </ClientPortal>
//   );
// };

// export default AppToast;
