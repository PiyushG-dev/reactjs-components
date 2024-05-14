"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import FormOption from "./FormOption";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm();

  // validating checkboxes for the available services
  const validateOptions = (selectedOptions) => {
    if (
      selectedOptions.includes("Unsure - I would like more information") &&
      selectedOptions.length > 1
    ) {
      return "you cannot select other options if you are unsure";
    }
    return true;
  };

  // using emailJS to send email with collected info

  const onSubmit = async (data) => {
    // const templateParams = {
    //   from_name: data.fullName,
    //   from_email: data.email,
    //   to_name: "kaarwaan events",
    //   venue: data.venue,
    //   email: data.email,
    //   number: data.phoneNumber,
    // };
    // try {
    //   const response = await emailjs.send(
    //     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    //     templateParams,
    //     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    //   );
    //   setIsSubmitted(true);
    //   setTimeout(() => {
    //     setIsSubmitted(false);
    //   }, 2000);
    //   console.log("SUCCESS", data, response);
    //   reset();
    // } catch (err) {
    //   console.error(err);
    // }
    console.log("SUCCESS", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-3/5 py-10 px-10 bg-quinary"
    >
      <div className="flex flex-col items-start gap-5">
        <FormField
          label="Full Name"
          type="text"
          placeholder="Adit Sharma"
          name="fullName"
          register={register}
          error={errors.fullName}
        />
        <FormField
          label="Phone number"
          type="number"
          placeholder="8764512309"
          name="phoneNumber"
          register={register}
          error={errors.phoneNumber}
          valueAsNumber
        />
        <FormField
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />
        <FormField
          label="Venue"
          type="text"
          placeholder="Jaipur"
          name="venue"
          register={register}
          error={errors.venue}
        />
        <FormField
          label="Event Date"
          type="date"
          name="date"
          register={register}
          error={errors.date}
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-Marcellus text-sm">
            What services are you interested in ?
          </h3>
          <div className="flex flex-col gap-2">
            <FormOption
              validateOptions={validateOptions}
              register={register}
              label="Full service planning"
            />
            <FormOption
              validateOptions={validateOptions}
              register={register}
              label="Partial Planning"
            />
            <FormOption
              validateOptions={validateOptions}
              register={register}
              label="Event Management"
            />
            <FormOption
              validateOptions={validateOptions}
              register={register}
              label="Unsure - I would like more information"
            />
          </div>
          {errors.services && (
            <span className="text-sm text-red-500 font-Manrope">
              {errors.services.message}
            </span>
          )}
        </div>
        <Button disabled={isSubmitting} variant="form">
          {isSubmitting ? "sending" : "Send"}
        </Button>
        {isSubmitted && (
          <span className="text-sm text-green-700 font-Manrope">
            successfully sent
          </span>
        )}
      </div>
    </form>
  );
};

export default Form;
