export default function InputText(props: any) {
  const label = props?.label || "";
  const multiline = props?.rows > 1;

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
      <div className="mt-2">
        {multiline ? (
          <>
            <textarea
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
              {...props}
            />
          </>
        ) : (
          <>
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
              {...props}
            />
          </>
        )}
      </div>
    </div>
  );
}
