"use client";

import HomeCard from "@/components/home/HomeCard";
import { Container, Grid } from "@mui/material";

export default function HomeMenu() {
  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={3}>
        <HomeCard title="Criar negociação" href="/negociacoes/criar" />
        <HomeCard title="Minhas negociações" href="/negociacoes" />
        <HomeCard title="Meus convites" href="/convites" />
      </Grid>
    </Container>
  );
}
