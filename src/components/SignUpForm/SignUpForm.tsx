import { TextField } from "@/src/components/TextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "@/src/schemas";
import { SignUpFormValues } from "./type";

interface SignUpFormProps {
  onSubmitReady: (data: SignUpFormValues) => void;
}

export const SingUpForm = (props: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(SignupSchema),
  });

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

      <button className="ring-1 ring-zinc-500 rounded-lg px-4 py-2">
        Submit
      </button>
    </form>
  );
};