import React from "react";

const FormOption = ({ register, label, validateOptions }) => {
  return (
    <label className="flex items-center gap-2">
      <input
        className="form-checkbox h-4 w-4 rounded"
        type="checkbox"
        value={label}
        {...register("services", { validate: validateOptions })}
      />
      <span className="font-Marcellus">{label}</span>
    </label>
  );
};

export default FormOption;
