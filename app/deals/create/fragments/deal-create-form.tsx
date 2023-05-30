"use client";

import { useSweetAlert } from "@/hooks/sweetalert";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as yup from "yup";

interface IFormValues {
  id?: number;
  type: "sale" | "change" | "wish";
  value: number;
  description: string;
}
interface IProps {
  initialData?: IFormValues;
}

export default function DealCreatePage(props: IProps) {
  const { Toast } = useSweetAlert();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<IFormValues>({
    id: props?.initialData?.id,
    type: props?.initialData?.type || "sale",
    value: props?.initialData?.value || 21,
    description: props?.initialData?.description || "ete",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (evt: any) => {
    setLoading(true);
    evt.preventDefault();

    let schemaValidation = yup.object().shape({
      description: yup.string().required("Descrição é obrigatória"),
      value: yup
        .number()
        .required("Valor é obrigatória")
        .min(1, "Valor mínimo de 1"),
      type: yup.string().required("Tipo é obrigatória"),
    });

    schemaValidation
      .validate(formValues, { abortEarly: false })
      .then(async () => {
        const res = await fetch(`/api/vibbra/deals`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        });

        if (!res?.ok) {
          setLoading(false);
          return Toast().fire({
            icon: "error",
            title: res.statusText,
          });
        }

        Toast().fire({
          icon: "success",
          title: "Negociação criada com sucesso",
        });

        setTimeout(() => {
          router.push("/deals");
        });
      })
      .catch((err) => {
        setLoading(false);
        Toast().fire({
          icon: "error",
          title: err.errors.join("<br/>"),
        });
      });
  };

  if (!mounted) return <></>;

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography variant="h6" gutterBottom>
          Criar Negociação
        </Typography>
        <Grid
          container
          spacing={3}
          component="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <Grid item sm={12}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Tipo
              </FormLabel>
              <RadioGroup
                row
                name="type"
                value={formValues.type}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="sale"
                  control={<Radio />}
                  label="Venda"
                />
                <FormControlLabel
                  value="change"
                  control={<Radio />}
                  label="Troca"
                />
                <FormControlLabel
                  value="wish"
                  control={<Radio />}
                  label="Desejo"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Valor</InputLabel>
              <Input
                name="value"
                onChange={handleChange}
                value={formValues.value}
                type="number"
                startAdornment={
                  <InputAdornment position="start">R$</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Descrição"
              fullWidth
              variant="standard"
              onChange={handleChange}
              value={formValues.description}
              multiline
              rows={6}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Salvar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
