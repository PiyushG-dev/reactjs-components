import React from "react";

const FormField = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  label,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-Marcellus">
        {label} <span className="text-red-500 text-sm">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          // valueAsNumber,
          minLength:
            name === "phoneNumber"
              ? { value: 10, message: "enter a valid phone number" }
              : null,
          required: `${label} is required`,
          pattern:
            type === "email"
              ? {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: "enter a valid email",
                }
              : null,
        })}
        className="border border-secondary font-Marcellus px-4 py-2 focus:outline-none focus:border-gray-400"
      />
      {error && (
        <span className="text-sm text-red-500 font-Manrope">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default FormField;
