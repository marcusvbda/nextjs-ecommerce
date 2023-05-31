"use client";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSweetAlert } from "@/hooks/sweetalert";
import * as yup from "yup";

interface IFormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { Toast } = useSweetAlert();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<IFormValues>({
    email: "admin@admin.com.br",
    password: "Adm1n!str4tor@00",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (evt: any) => {
    setLoading(true);
    evt.preventDefault();

    let schemaValidation = yup.object().shape({
      email: yup.string().email().required("Email é obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "A senha deve conter pelo menos 1 caractere especial, 1 caractere maiúsculo e 1 número"
        )
        .required("Senha é obrigatória"),
    });

    schemaValidation
      .validate(formValues, { abortEarly: false })
      .then(async () => {
        const res = await signIn("credentials", {
          redirect: false,
          email: formValues.email,
          password: formValues.password,
          callbackUrl,
        });

        if (res?.error) {
          setLoading(false);
          return Toast().fire({
            icon: "error",
            title: res.error,
          });
        }

        setTimeout(() => {
          router.push(callbackUrl);
        });
      })
      .catch((err) => {
        setLoading(false);
        Toast().fire({
          icon: "error",
          title: err.errors.join("<br/>"),
        });
      });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="input-label">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            disabled={loading}
            autoComplete="email"
            required
            className="tail-input"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="input-label">
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={formValues.password}
            onChange={handleChange}
            disabled={loading}
            required
            className="tail-input"
          />
        </div>
      </div>

      <div>
        <button type="submit" className="btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
}
