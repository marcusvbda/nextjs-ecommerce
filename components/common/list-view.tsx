import { DataGrid, ptBR } from "@mui/x-data-grid";
import Button from "./button";

interface IProps {
  title: string;
  loading: boolean;
  rows: any[];
  columns: any[];
  createBtn?: {
    label: string;
    onClick: () => void;
  };
}

export default function ListView(props: IProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-3xl font-bold">{props.title}</h1>
        {props.createBtn && (
          <>
            <Button
              size="small"
              variant="contained"
              onClick={props?.createBtn?.onClick}
              className="ml-auto"
            >
              {props?.createBtn?.label}
            </Button>
          </>
        )}
      </div>
      <div className="h-96 w-full flex items-center justify-center">
        <DataGrid
          loading={props.loading}
          rows={props.rows}
          columns={props.columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </div>
  );
}
