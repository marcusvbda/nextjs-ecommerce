"use client";

import { Button, Container, Link, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

interface IProps {
  children: any;
}

export default function AdminTemplate(props: IProps) {
  const route = usePathname();
  const router = useRouter();

  if (["/login"].includes(route)) return <>{props.children}</>;

  const handleClickRouter = (evt: any, route: any) => {
    evt.preventDefault();
    router.push(route);
  };

  const getLinkColor = (linkRoute: any) => {
    return route === linkRoute ? "text.secondary" : "text.primary";
  };

  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            onClick={(evt: any) => handleClickRouter(evt, "/")}
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            Vibbra Ecommerce
          </Typography>
          <nav>
            <Link
              variant="button"
              color={getLinkColor("/deals")}
              onClick={(evt: any) => handleClickRouter(evt, "/deals")}
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Minhas negociações
            </Link>
            <Link
              variant="button"
              color={getLinkColor("/invites")}
              href="#"
              onClick={(evt: any) => handleClickRouter(evt, "/invites")}
              sx={{ my: 1, mx: 1.5 }}
            >
              Meus convites
            </Link>
          </nav>
          <Button
            variant="outlined"
            size="small"
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
