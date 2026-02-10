const InputBox = ({
  LabelName = "",
  Placeholder = "",
  className = "",
  Type = "text",
  Name,
  Value,
  onChange,
  Required = true,
  Disabled = false,
  Ref,
  OnInput,
  max,
  labelClassName = "",
  Checked, // ⭐ NEW (for radio)
}) => {
  const isRadio = Type === "radio"; // detect radio input

  return (
    <div className="flex justify-center items-center w-full">
      <div className="py-4 w-full">
        {/* For radio, label should come AFTER input */}
        {!isRadio && (
          <label
            htmlFor={Name}
            className={`block text-sm font-medium mb-2 ml-4 ${labelClassName}`}
          >
            {LabelName}
          </label>
        )}

        <div className={isRadio ? "flex items-center gap-2 ml-4" : ""}>
          <input
            id={Name}
            name={Name}
            type={Type}
            value={Value}
            checked={Checked} // ⭐ required for radio buttons
            onChange={onChange}
            onInput={OnInput}
            placeholder={Placeholder}
            required={Required}
            ref={Ref}
            disabled={Disabled}
            max={max}
            className={
              isRadio
                ? "h-4 w-4 cursor-pointer" // ⭐ radio styling
                : `w-full px-4 py-2 text-white bg-transparent border-b border-gray-300 focus:ring-neutral-500 outline-none transition duration-200 ease-in-out hover:shadow-md ${className} h-full`
            }
          />

          {/* For radio, label comes here */}
          {isRadio && (
            <label
              htmlFor={Name}
              className={`text-sm font-medium cursor-pointer ${labelClassName}`}
            >
              {LabelName}
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputBox;
