import { useRef } from "react";
import { SignUpForm } from "@/src/components/SignUpForm/SignUpForm";
import { SignUpApi, SignUpFormValues } from "@/src/components/SignUpForm/type";
import { useRouter } from "next/router";

export default function SignUpPage() {
  const signupFormRef = useRef<SignUpApi>(null);
  const router = useRouter();

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

    router.replace("/");
  };

  console.log("re-render signup");

  return <SignUpForm ref={signupFormRef} onSubmitReady={handleSubmit} />;
}
