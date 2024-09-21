import React from "react";
import { Title, Button, Input } from "../../components";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const validations = z.object({
    name: z.string().min(3, "O nome deve conter ao menos 3 caracteres"),
    title: z.string().min(3, "O título deve conter ao menos 3 caracteres"),
    describe: z.string().optional(),
  });

  type FormValues = z.infer<typeof validations>;
  const defaultValues = {
    name: "",
    title: "",
    describe: "",
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

  const [values, setValues] = React.useState<FormValues[]>([]);
  const [itemUpdate, setItemUpdate] = React.useState<
    FormValues & { id: number }
  >();

  const deleteItem = (index: number) => {
    setValues((prev) => prev.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, data: FormValues) => {
    setValues((prev) => {
      const newValues = [...prev];
      newValues[index] = data;
      return newValues;
    });
  };

  const onUpdate = (index: number) => {
    const data = values[index];
    setItemUpdate({ ...data, id: index });
    reset(data);
  };

  const onSubmit = handleSubmit((data) => {
    setValues((prev) => [...prev, data]);
    reset();
  });

  const onSubmitUpdate = handleSubmit((data) => {
    if (itemUpdate) updateItem(itemUpdate.id, data);
    setItemUpdate(undefined);
    reset(defaultValues);
  });

  return (
    <div>
      <Title>To Do List</Title>
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
        <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
          <Button onClick={() => navigate("/about")}>Sobre</Button>
          <Button onClick={() => navigate("/via-cep")}>Via Cep</Button>
        </div>
        <Input
          label="Nome"
          placeholder="Name"
          {...register("name")}
          helperText={errors.name?.message}
        />
        <Input
          label="Título"
          placeholder="Escreva o Título"
          {...register("title")}
          helperText={errors.title?.message}
        />
        <Input
          label="Descrição"
          placeholder="Escreva a descrição"
          {...register("describe")}
          helperText={errors.describe?.message}
        />
        <Button onClick={itemUpdate ? onSubmitUpdate : onSubmit}>
          {itemUpdate ? "Atualizar" : "Cadastrar"}
        </Button>

        {values.map((value, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40vw",
              gap: "0.2rem",
            }}
          >
            <p>Número: {index + 1}</p>
            <p>Nome: {value.name}</p>
            <p>Título: {value.title}</p>
            <p>Descrição: {value.describe}</p>
            <Button
              onClick={() => deleteItem(index)}
              style={{ backgroundColor: "red" }}
            >
              Excluir
            </Button>
            <Button
              onClick={() => onUpdate(index)}
              style={{ backgroundColor: "blue" }}
            >
              Atualizar
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
