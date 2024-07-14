// import Link from "next/link";
import { Link } from "react-router-dom";
import { ReactNode } from 'react';
import React from "react";

interface PropsInterface{
  to?: string;
  children?: ReactNode;
  href?: string;
  className?: string;
}

const AppLink = (props: PropsInterface) => {
  const {
    to= '', 
    children,
    href= '',
    className=''
  } = props;

  // const defaultClass = ''

  // const classStyles = className ? classNa

  if(href) return  <a href={href} className={className}>{children}</a>

  return(
    <Link to={to} className={className}>{children}</Link>
  )
}

export default AppLink