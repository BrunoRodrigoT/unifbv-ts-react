import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

export default function About() {
  const navigate = useNavigate();

  return (
    <div>
      Sobre a aplicação
      <Button onClick={() => navigate("/")}> Voltar</Button>
    </div>
  );
}
