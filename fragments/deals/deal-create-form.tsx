"use client";

import Button from "@/components/common/button";
import InputRadio from "@/components/common/input-radio";
import InputText from "@/components/common/input-text";
import { useSweetAlert } from "@/hooks/sweetalert";
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

export default function DealCreateForm(props: IProps) {
  const { Toast } = useSweetAlert();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<IFormValues>({
    id: props?.initialData?.id,
    type: props?.initialData?.type || "sale",
    value: props?.initialData?.value || 0,
    description: props?.initialData?.description || "",
  });

  useEffect(() => setMounted(true), []);

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
    <div className="flex align-center justify-center">
      <div className="w-1/3 rounded overflow-hidden shadow-lg border-gray-200 border p-8">
        <h3 className="text-xl">Criar Negociação</h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-5">
            <InputRadio
              label="Tipo"
              name="type"
              onChange={handleChange}
              value={formValues.type}
              options={[
                { label: "Venda", value: "sale" },
                { label: "Troca", value: "change" },
                { label: "Desejo", value: "wish" },
              ]}
            />
            <InputText
              label="Valor"
              name="value"
              onChange={handleChange}
              value={formValues.value}
              type="number"
            />
            <InputText
              name="description"
              onChange={handleChange}
              value={formValues.description}
              rows={6}
            />
            <Button disabled={loading} type="submit">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
