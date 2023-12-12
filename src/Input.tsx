import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder?: string;
  submit?: boolean;
}

const Input = ({ name, label, placeholder, ...rest }: InputProps) => {
  return (
    <>
      <label htmlFor="{name}">{label}</label>
      <input id={name} placeholder={placeholder} {...rest} />
    </>
  );
};
export default Input;
