import AdminTemplate from "@/components/templates/AdminTemplate";
import React from "react";
import HomeMenu from "./HomeMenu";

export default async function MyApp() {
  return (
    <AdminTemplate>
      <HomeMenu />
    </AdminTemplate>
  );
}
