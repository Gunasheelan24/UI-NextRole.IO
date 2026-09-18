import React, { type HTMLInputTypeAttribute } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface ICustomInput {
  inputInfo?: string;
  label: boolean;
  labelText: string;
  inputType: HTMLInputTypeAttribute;
  inputPlaceholder: string;
  inputId: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}

const CustomInput: React.FC<ICustomInput> = ({
  inputInfo,
  labelText,
  label,
  inputType,
  inputPlaceholder,
  inputId,
  inputClassName,
  labelClassName,
  errorClassName,
}) => {
  return (
    <main>
      {/* Label Element */}
      {label && (
        <Label htmlFor={inputId} className={labelClassName}>
          {labelText}
        </Label>
      )}

      {/* Input Element */}
      <Input
        type={inputType}
        placeholder={inputPlaceholder}
        id={inputId}
        className={inputClassName}
      />

      {/* Custom Error Or Note Element */}
      {inputInfo && <p className={errorClassName}>{inputInfo}</p>}
    </main>
  );
};

export default CustomInput;
