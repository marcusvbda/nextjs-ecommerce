import { Button, Card, CardActions, CardHeader, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
interface IProps {
  title: string;
  href: string;
}

export default function HomeCard(props: IProps) {
  const router = useRouter();

  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardHeader
          title={props.title}
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{
            align: "center",
          }}
        />
        <CardActions>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => router.push(props.href)}
          >
            Acessar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
