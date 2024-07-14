import * as React from "react";
import { twMerge } from 'tailwind-merge'

interface BaseProps{
  children: React.ReactNode;
  className?: string;
  // variant: 'primary'| 'secondary'| 'outline' | 'link';
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  text?: boolean;
  to?: string;
  disabled?: boolean;
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button' | undefined;
  tonal?: boolean,
  loading?: boolean,
};


const AppButton = (props: BaseProps) => {
  const {
    className = "",
    children,
    primary = true,
    secondary = false,
    outline = false,
    text = false,
    tonal = false,
    onClick,
    type = 'button',
    loading = false,
    to,
  } = props;

  const defaultClass = ` px-6 py-3 cursor-pointer rounded-full relative overflow-hidden  before:content-[''] before:absolute before:w-[40px] before:h-full before:top-0 before:-left-[44px] before:opacity-20 hover:scale-[1.02] transition-all hover:before:animate-shine before:bg-gradient-to-r before:from-white/5 before:to-primary-100 before:-skew-x-12 hover:shadow  enabled:active:scale-95 border border-2 font-semibold text-sm whitespace-nowrap`;

  const primaryClass = 'bg-primary-500 text-white border-primary-500'
  
  const outlineClass = "bg-transparent border-primary-400 text-primary-500"

  const tonalClass= "bg-primary-50 border-primary-50 text-primary-500"
  const textClass= "bg-transparent border-transparent text-primary-500"

  const mergeClass = () => {
    if(outline){
      return twMerge(defaultClass, outlineClass)        
    }
    if(text){
      return twMerge(defaultClass, textClass)        
    }
    if(tonal){
      return twMerge(defaultClass, tonalClass)     
    }
    return twMerge(defaultClass, primaryClass)
  }
  
  let allClassNames = mergeClass();
   
  return (
    <>
    <button className={`${allClassNames}`} onClick={onClick} type={type} disabled={loading}>
      {props.children}
    </button>
    </>

  );
};

export default AppButton;


