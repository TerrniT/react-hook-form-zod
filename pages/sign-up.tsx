import { useRef } from "react";
import { SignUpForm } from "@/src/components/SignUpForm/SignUpForm";
import { SignUpApi, SignUpFormValues } from "@/src/components/SignUpForm/type";

export default function SignUpPage() {
  const signupFormRef = useRef<SignUpApi>(null);

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

    if (!jsonResponse.success) {
      signupFormRef.current?.setErrors(jsonResponse.errors);
      return;
    }
  };

  console.log("re-render signup");

  return <SignUpForm ref={signupFormRef} onSubmitReady={handleSubmit} />;
}
