import { useCallback } from "react";
import { SingUpForm } from "@/src/components/SignUpForm/SignUpForm";
import { SignUpFormValues } from "@/src/components/SignUpForm/type";

export default function SignUpPage() {
  const handleSubmit = async (data: SignUpFormValues) => {
    const response = await fetch("/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    const jsonResponse = await response.json();
    console.log("server response", jsonResponse);
  };

  console.log("re-render signup");

  return <SingUpForm onSubmitReady={handleSubmit} />;
}
