interface PropsInterface {
  placeholder?: string;
  label?: string;
  id?: string | null;
  name?: string;
  type?: any;
  required?: boolean;
}

const AppInput = (props: PropsInterface) => {
  const { placeholder, label = null, required = false, name } = props;
  return (
    <>
      {label && <label htmlFor="">{label}</label>}
      <input
        type="text"
        // id="last_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 min-w-[320px] max-w-[420px]"
        placeholder={placeholder}
        required={required}
        name={name}
      />
    </>
  );
};

export default AppInput;
