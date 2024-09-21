import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Input, Title } from "../../components";
import { useNavigate } from "react-router-dom";

export default function ViaCep() {
  const navigate = useNavigate();

  type CepResponse = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
  };

  const [cepResponse, setCepResponse] = React.useState<CepResponse>();

  const validations = z.object({
    cep: z.string().min(8, "O Cep deve conter 8 digitos"),
  });

  type FormValues = z.infer<typeof validations>;

  const defaultValues = {
    cep: "",
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(validations),
  });

  const onSubmit = handleSubmit((data: FormValues) => {
    fetch(`https://viacep.com.br/ws/${data.cep}/json/`)
      .then(async (res) => {
        setCepResponse(await res.json());
        reset();
      })
      .catch((error) => {
        alert(error);
      });
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        width: "40vw",
        margin: "0 auto",
      }}
    >
      <Title>VIA CEP API 🚀</Title>
      <Button onClick={() => navigate("/")}>Voltar</Button>
      <Input
        label="Cep"
        placeholder="00000000"
        {...register("cep")}
        helperText={errors.cep?.message}
      />
      <Button onClick={onSubmit}>Buscar</Button>

      {cepResponse && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
          <p>
            Cep: <span>{cepResponse.cep}</span>
          </p>
          <p>
            Logradouro: <span>{cepResponse.logradouro}</span>
          </p>
          <p>
            Complemento: <span>{cepResponse.complemento}</span>
          </p>
          <p>
            Bairro: <span>{cepResponse.bairro}</span>
          </p>
          <p>
            Cidade: <span>{cepResponse.localidade}</span>
          </p>
          <p>
            UF: <span>{cepResponse.uf}</span>
          </p>
        </div>
      )}
    </div>
  );
}
