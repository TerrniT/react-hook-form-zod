import { RefCallback } from "react";
import { Input } from "react-daisyui";

interface TextFieldProps {
  id: string;
  label: string;
  error?: string;
  inputProps?: {
    onChange?: (e: any) => unknown;
    onBlur?: (e: any) => unknown;
    ref?: RefCallback<HTMLInputElement>;
    name?: string;
    min?: string | number;
    max?: string | number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required?: boolean;
    disabled?: boolean;
  };
  type?: "password" | "text" | "phone-number";
}

export const TextField = (props: TextFieldProps) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label htmlFor={props.id} className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <Input
        color={"ghost"}
        id={props.id}
        type={props.type ?? "text"}
        className="rounded-lg p-1 ring-1 ring-zinc-500"
        {...(props.inputProps ?? {})}
      />
      {props.error ? (
        <span className="label-text text-error">{props.error}</span>
      ) : null}
    </div>
  );
};
