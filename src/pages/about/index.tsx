import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Title } from "../../components";
import useRickAndMortyApi from "../../services/useRickAndMortyApi";
import { Card, ContainerInfo, ContentCards, Image } from "./styles";

export default function About() {
  const navigate = useNavigate();
  const { getCharacters } = useRickAndMortyApi();
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    getCharacters().then((response) => {
      setCharacters(response.results);
    });
  }, [getCharacters]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        width: "80vw",
        margin: "0 auto",
      }}
    >
      <Title>Rick and Morty</Title>
      <Button onClick={() => navigate("/")}> Voltar</Button>
      <ContentCards>
        {characters.map((person: any) => (
          <Card>
            <Image key={person.id} src={person.image} alt={person.name} />
            <ContainerInfo>
              <p> Nome: {person.name}</p>
              <p> Status: {person.status}</p>
            </ContainerInfo>
          </Card>
        ))}
      </ContentCards>
    </div>
  );
}
