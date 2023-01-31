import { useCallback } from "react";
import { SingUpForm } from "@/src/components/SignUpForm/SignUpForm";
import { SignUpFormValues } from "@/src/components/SignUpForm/type";

export default function SignUpPage() {
  const handleSubmit = async (data: SignUpFormValues) => {
    console.log("Handle submit ready data", data);
  };

  console.log("re-render signup");

  return <SingUpForm onSubmitReady={handleSubmit} />;
}
