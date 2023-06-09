"use client";

import ListView from "@/components/common/list-view";
import { useEffect, useState } from "react";

const columns: any[] = [
  { field: "id", headerName: "#", width: 70 },
  { field: "description", headerName: "Descrição", width: 200 },
  { field: "email", headerName: "Email", width: 400 },
];

export default function InvitesList() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("/api/vibbra/invites")
        .then((res) => res.json())
        .then((data) => {
          setRows(data);
          setLoading(false);
        });
    };

    setTimeout(fetchData, 500);
  }, []);

  return (
    <ListView
      title="Meus Convites"
      loading={loading}
      rows={rows}
      columns={columns}
    />
  );
}
