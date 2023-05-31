"use client";

import Button from "@/components/common/button";
import { Box } from "@mui/material";
import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
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
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-3xl font-bold">Minhas Negociações</h1>
        <Button
          size="small"
          variant="contained"
          onClick={() => router.push("/deals/create")}
          className="ml-auto"
        >
          Nova Negociação
        </Button>
      </div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          loading={loading}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          pageSizeOptions={[5, 10]}
        />
      </Box>
    </div>
  );
}
