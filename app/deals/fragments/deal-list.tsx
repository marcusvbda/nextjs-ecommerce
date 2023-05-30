"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
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
    <>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid item>
          <Typography variant="h4" component="h1" gutterBottom>
            Minhas Negociações
          </Typography>
        </Grid>
        <Grid item>
          <Button
            size="small"
            variant="contained"
            onClick={() => router.push("/deals/create")}
          >
            Nova Negociação
          </Button>
        </Grid>
      </Grid>
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
    </>
  );
}
