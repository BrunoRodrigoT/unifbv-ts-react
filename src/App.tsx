import React from "react";
import { Title, Button, Input } from "./components";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function App() {
  const validations = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email"),
    notes: z.string().optional(),
  });

  type FormValues = z.infer<typeof validations>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      notes: "",
    },
    resolver: zodResolver(validations),
  });

  const [values, setValues] = React.useState<FormValues>();

  const onSubmit = handleSubmit((data) => setValues(data));

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
        <Input
          label="Nome"
          placeholder="Name"
          {...register("name")}
          helperText={errors.name?.message}
        />
        <Input
          label="Email"
          placeholder="Name"
          {...register("email")}
          helperText={errors.email?.message}
        />
        <Input
          label="Notas"
          placeholder="Name"
          {...register("notes")}
          helperText={errors.notes?.message}
        />
        <Button onClick={onSubmit}>Entrar</Button>

        {values && <p>{JSON.stringify(values)}</p>}
      </div>
    </div>
  );
}

export default App;
