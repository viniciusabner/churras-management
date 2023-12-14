import React from "react";
import "./input.css";

interface InputProps {
  label?: string;
  id?: string;
  type?: "text" | "password" | "email" | "date" | "number";
  inputValue?: string | number;
  disabled?: boolean;
  placeholder?: string;
  maxLength?: number | undefined;
  inputClassName?: string;
  labelClassName?: string;
  onchange?: any;
  required?: boolean;
}

export const Input = ({
  label = "Login",
  id,
  type = "email",
  inputValue,
  disabled,
  placeholder = "e-mail",
  maxLength,
  inputClassName,
  labelClassName,
  onchange = function () {},
  required,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="desktop" className=" text-[21px] font-bold">
        {label}
      </label>
      <input
        className={`storybook-input placeholder:italic placeholder:text-lg placeholder:font-normal, ${inputClassName} `}
        id={id}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={onchange}
        required={required}
      />
    </div>
  );
};
