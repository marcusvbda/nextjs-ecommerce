import AdminTemplate from "@/components/templates/admin-template";
import React from "react";
import HomeMenu from "@/components/home/home-menu";

export default async function MyApp() {
  return (
    <AdminTemplate>
      <HomeMenu />
    </AdminTemplate>
  );
}
