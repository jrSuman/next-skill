"use client"
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import * as React from "react";
import IconSVG from '../../assets/images/icons.svg'

const AppIcon = (props:any) => {
  const {
    name,
    size,
    stroke,
    className
  } = props;

  const classes = twMerge('w-4 h-4', props.className);
  const [iconLink, setIconLink] = useState('');

  // useEffect(() => {
  //   const link = `/icons.svg#st-${name?.toLocaleLowerCase()`;


  //   // setIconLink(link)
  // },[iconLink])
  // const href = `}`
  useEffect(()=> {
    console.log("IconSVG", IconSVG)
    const link = `${IconSVG}#st-${name?.toLocaleLowerCase()}`;
    
    setIconLink(link)
  }, [name])

  return(
    <>
    {/* <span>{iconLink}</span> */}
    
    <svg className={classes} viewBox="0 0 16 16" v-bind="$attrs">
      <use
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink={iconLink}
        href={iconLink}
        fill="currentColor"
      />
    </svg>
    </>
  )

}


export default AppIcon;