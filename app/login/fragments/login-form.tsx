"use client";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSweetAlert } from "@/hooks/sweetalert";
import * as yup from "yup";
import Copyright from "./copy-right";

export default function LoginForm() {
  const { Toast } = useSweetAlert();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
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
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        md={12}
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login de Vibbra
        </Typography>
        <Grid
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            autoFocus
            disabled={loading}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={formValues.password}
            name="password"
            label="Senha"
            type="password"
            onChange={handleChange}
            disabled={loading}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            Entrar
          </Button>
          <Grid md={12} item container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Não tem um conta ainda? Cadastre-se"}
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </Grid>
  );
}
