// import { forwardRef } from 'react';
import * as React from "react";

interface PropsInterface {
  placeholder?: string;
  label?: string | null;
  // id?: string | null;
  name?: string;
  type?: any;
  required?: boolean;
  textarea?: boolean;
  errorMessage?:string|null;
  onFocus?: any
  onChange?: any
  value?: any
}

const AppInput = React.forwardRef(({
  placeholder,
  label = null,
  required = false,
  name,
  textarea = false,
  type='text',
  errorMessage=null,
  ...props
}: PropsInterface, ref) => {
  // const {
  //   placeholder,
  //   label = null,
  //   required = false,
  //   name,
  //   textarea = false,
  //   type='text',
    
  // } = props;
  return (
    <>
      <div className="relative">
        {label && <label htmlFor="" className="text-sm mb-2 text-gray-500">{label}</label>}
        {textarea ? (
          <textarea
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 min-w-[280px] max-w-[900px] min-h-32"
            placeholder={placeholder}
            required={required}
            name={name}
            {...props}
          />
        ) : (
          <input
            type={type}
            // id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 min-w-[280px] max-w-[900px]"
            placeholder={placeholder}
            required={required}
            name={name}
            {...props}
          />
        )}
         {errorMessage && <span className="text-sm mb-2 text-rose-500">{errorMessage}</span>}
      </div>
    </>
  );
});

AppInput.displayName = "AppInput";

export {AppInput};
