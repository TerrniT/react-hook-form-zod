import { TextField } from "@/src/components/TextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "@/src/schemas";
import { KeyValues, SignUpApi, SignUpFormValues } from "./type";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Button } from "react-daisyui";

interface SignUpFormProps {
  onSubmitReady: (data: SignUpFormValues) => Promise<void>;
}

export const SignUpForm = forwardRef<SignUpApi, SignUpFormProps>(
  (props, ref) => {
    const {
      register,
      handleSubmit,
      setError,
      formState: { errors, isSubmitting },
    } = useForm<SignUpFormValues>({
      resolver: zodResolver(SignupSchema),
    });

    const setErrorsRef = useRef(setError);
    setErrorsRef.current = setError;

    useImperativeHandle(
      ref,
      () => {
        return {
          setErrors: (errors: Record<KeyValues, string>) => {
            Object.entries(errors).forEach(([key, error]) => {
              setErrorsRef.current(key as KeyValues, { message: error });
            });
          },
        };
      },
      []
    );

    return (
      <form
        className="flex flex-col gap-4 items-center justify-center h-screen"
        onSubmit={handleSubmit(props.onSubmitReady)}
      >
        <div className="stat-title">Sign Up</div>

        <TextField
          id="email"
          label="Email"
          inputProps={register("email")}
          error={errors.email?.message as string}
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          inputProps={register("password")}
          error={errors.password?.message as string}
        />

        <TextField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          inputProps={register("confirmPassword")}
          error={errors.confirmPassword?.message as string}
        />

        <Button color="ghost" variant="outline" disabled={isSubmitting}>
          {isSubmitting ? "Sending" : "Submit"}
        </Button>
      </form>
    );
  }
);

SignUpForm.displayName = "ForwaredRefSignUpForm";
