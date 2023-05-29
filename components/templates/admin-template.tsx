"use client";

import {
  Button,
  Container,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { signOut, useSession } from "next-auth/react";

interface IProps {
  children: any;
}

export default function AdminTemplate(props: IProps) {
  const { data: session } = useSession();
  console.log("logged session", session);

  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Vibbra Ecommerce
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="deals/create"
              sx={{ my: 1, mx: 1.5 }}
            >
              Criar negociações
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/deals"
              sx={{ my: 1, mx: 1.5 }}
            >
              Minhas negociações
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/invites"
              sx={{ my: 1, mx: 1.5 }}
            >
              Meus convites
            </Link>
          </nav>
          <Button
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => signOut()}
          >
            Sair
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ pt: 8, pb: 6 }}>
        {props.children}
      </Container>
    </>
  );
}
