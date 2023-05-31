export default function (props: any) {
  const label = props?.label || "";
  const options = props?.options || [];

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      </div>
      <ul className="items-center mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {options.map((option: any, key: number) => (
          <li
            key={key}
            className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
          >
            <label className="flex items-center pl-3">
              <input
                {...props}
                type="radio"
                value={option.value}
                checked={props.value === option.value}
                className="w-4 h-4 text-blue-600
                 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700
                  dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <span className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {`${option.label} `}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
