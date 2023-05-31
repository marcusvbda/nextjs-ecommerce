"use client";

import ListView from "@/components/common/list-view";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const columns: any[] = [
  { field: "id", headerName: "#", width: 70 },
  { field: "value", headerName: "Valor", width: 130 },
  { field: "description", headerName: "Descrição", width: 400 },
];

export default function DealsList() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("/api/vibbra/deals")
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
      title="Minhas Negociações"
      loading={loading}
      rows={rows}
      columns={columns}
      createBtn={{
        label: "Nova Negociação",
        onClick: () => router.push("/deals/create"),
      }}
    />
  );
}
