"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    const templateParams = {
      from_name: data.fullName,
      from_email: data.email,
      to_name: "kaarwaan events",
      venue: data.venue,
      email: data.email,
      number: data.phoneNumber,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
      console.log("SUCCESS", data, response);
      reset();
    } catch (err) {
      console.error(err);
    }
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
