"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSweetAlert } from "@/hooks/sweetalert";

export default function LoginForm() {
  const router = useRouter();
  const { Toast } = useSweetAlert();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin";
  const [domLoaded, setDomLoaded] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return <></>;

  const submit = async (evt: any) => {
    evt.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email: formValues.email,
      password: formValues.password,
      callbackUrl,
    });

    if (res?.error) {
      return Toast().fire({
        icon: "error",
        title: res.error,
      });
    }

    Toast().fire({
      icon: "success",
      title: "Você está logado",
    });

    router.push(callbackUrl);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form onSubmit={submit}>
      <input type="email" required name="email" onChange={handleChange} />
      <input type="password" required name="Password" onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}
