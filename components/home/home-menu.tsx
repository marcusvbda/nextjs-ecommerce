"use client";

import HomeCard from "@/components/home/home-card";
import { Container, Grid } from "@mui/material";

export default function HomeMenu() {
  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={3}>
        <HomeCard title="Criar negociação" href="/deals/create" />
        <HomeCard title="Minhas negociações" href="/deals" />
        <HomeCard title="Meus convites" href="/invites" />
      </Grid>
    </Container>
  );
}