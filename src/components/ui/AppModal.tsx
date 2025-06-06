// import AppButton from "@/components/AppButton";
// import ClientPortal from "@/components/ClientPortal";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  animated,
  useSpringRef,
  useTransition,
  useSpring,
} from "@react-spring/web";
import ClientPortal from "./ClientPortal";
import AppButton from "./AppButton";
interface AppModalInterface {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  width?: string;
  title?: string;
  isCode?: boolean;
  codeData?: string;
  footerContent?: React.ReactElement;
}

// console.log('animated', useTransition)

const AppModal = (props: AppModalInterface) => {
  const {
    children,
    isOpen = false,
    onClose,
    width = "480",
    title,
    isCode = false,
    codeData = "",
    footerContent,
  } = props;

  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const api = useSpringRef();

  const copyCode = () => {
    navigator.clipboard.writeText(codeData);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  useEffect(() => {
    // console.log('isOpen', isOpen)
    if (!isOpen) return;
    const handleEsc = (event: any) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  const transition = useTransition(isOpen, {
    config: 
    { tension: 100, friction: 8, clamp: true },
    from: {
      scale: 0.9,
      opacity: 0,
      // translateY: 100,
      // translateX: "-50%",
    },
    enter: {
      scale: 1,
      opacity: 1,
      // translateY: 0,
      // translateX: "-50%",
    },
    leave: {
      scale: 0.9,
      opacity: 0,
      // translateY: 100,
      // translateX: "-50%",
    },
  });

  return (
    <>
      <ClientPortal selector="myPortal" show={isOpen}>
        {transition((style, isOpen) => (
          <>
            {isOpen && (
              <animated.div
                aria-hidden="true"
                className="fixed inset-0 z-40 flex items-center justify-center w-full overflow-x-hidden overflow-y-auto bg-black/10"
                style={{ opacity: style.opacity }}
              />
            )}

            {isOpen && (
              <animated.div
                className="fixed inset-0 z-40 flex items-center justify-center w-full overflow-x-hidden overflow-y-auto"
                style={{
                  ...style,
                }}
              >
                <div className="relative w-full h-full md:p-10 p-3 flex justify-center items-center">
                  <div
                    className="relative p-5 bg-white mx-auto sm:p-8 rounded-xl w-full"
                    style={{ maxWidth: `${width}px` }}
                  >
                    <h4 className="font-semibold text-xl text-gray-700">
                      {title}
                    </h4>
                    <button
                      type="button"
                      className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-red-100 hover:text-red-600 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white transition-all"
                      data-modal-toggle="deleteModal"
                      onClick={onClose}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>

                    {isCode ? (
                      <div className="my-4 w-full  rounded-md bg-gray-800  text-orange-300 relative">
                        <button
                          className="absolute right-2 top-2 flex justify-end rounded-tr overflow-hidden z-10 cursor-pointer"
                          onClick={copyCode}
                        >
                          <div className="p-2 text-primary-50 bg-primary-50/40 backdrop-blur-sm border-primary-100 flex gap-2 items-center text-sm rounded-md hover:bg-primary-50 hover:text-primary-500 transition-all">
                            {isCopied ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="bi bi-check2 w-4 h-4"
                                viewBox="0 0 16 16"
                              >
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="bi bi-clipboard w-4 h-4"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                              </svg>
                            )}
                          </div>
                        </button>
                        <div className="flex  min-h-20 relative z-0 overflow-y-auto max-h-[70vh] rounded-md">
                          <textarea
                            value={codeData}
                            className="w-full h-[70vh] bg-transparent p-4 no-scrollbar resize-none rounded-md text-sm font-light"
                            readOnly
                          ></textarea>
                        </div>
                      </div>
                    ) : (
                      <div className="overflow-y-auto max-h-[80vh] my-4 w-full  no-scrollbar">
                        {children}
                      </div>
                    )}

                    <div className="flex justify-end gap-3">
                      <AppButton onClick={onClose} text>
                        Close
                      </AppButton>
                      {footerContent && footerContent}
                    </div>
                  </div>
                </div>
              </animated.div>
            )}
          </>
        ))}
   </ClientPortal>
    </>
  );
};
export default AppModal;
