"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
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
            Meus Convites
          </Typography>
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
