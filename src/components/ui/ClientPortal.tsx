import { useEffect, useRef } from "react"
import { createPortal } from "react-dom";

type ClientPortalInterface = {
  children: React.ReactNode;
  show?: boolean;
  onClose?: () => void;
  selector: string
}

const ClientPortal = ({children, selector, show}: ClientPortalInterface) => {
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    // console.log('tef', ref, selector)
    ref.current = document.getElementById(selector);
    // console.log('show', show)
  }, [selector, show])
  return ref.current ? createPortal(children, ref.current) : null;
  
}

export default ClientPortal;