import { TextField } from "@/src/components/TextField";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "@/src/schemas";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignupSchema),
  });

  const onValid = useCallback((data: unknown) => {
    console.log("on valid", data);
  }, []);

  console.log("re-render signup", errors);

  return (
    <form
      className="flex flex-col gap-4 items-center justify-center h-screen"
      onSubmit={handleSubmit(onValid)}
    >
      <div className="stat-title">Sign Up</div>

      <TextField
        id="email"
        label="email"
        inputProps={register("email")}
        error={errors.email?.message as string}
      />

      <TextField
        id="password"
        type="password"
        label="password"
        inputProps={register("password")}
        error={errors.password?.message as string}
      />

      <TextField
        id="confirmPassword"
        type="password"
        label="Confirm Password"
        inputProps={register("confirmPassword")}
        error={errors.confirmPassword?.message as string}
      />

      <button className="ring-1 ring-zinc-500 rounded-lg px-4 py-2">
        Submit
      </button>
    </form>
  );
}
