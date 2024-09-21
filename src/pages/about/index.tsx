import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Title } from "../../components";
import useRickAndMortyApi from "../../services/useRickAndMortyApi";
import { Card, ContainerInfo, ContentCards, Image } from "./styles";
import { RickAndMortyResponse } from "../../types/rickAndMorty";

export default function About() {
  const navigate = useNavigate();
  const { getCharacters } = useRickAndMortyApi();
  const [characters, setCharacters] = React.useState<
    RickAndMortyResponse["results"]
  >([]);
  const [info, setInfo] = React.useState<RickAndMortyResponse["info"]>();
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    getCharacters(page).then((response) => {
      setInfo(response.info);
      setCharacters(response.results);
    });
  }, [getCharacters, page]);

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
        {characters.map((person) => (
          <Card>
            <Image key={person.id} src={person.image} alt={person.name} />
            <ContainerInfo>
              <p> Nome: {person.name}</p>
              <p> Status: {person.status}</p>
            </ContainerInfo>
          </Card>
        ))}
      </ContentCards>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          width: "40vw",
          marginBottom: "2rem",
        }}
      >
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Página anterior
        </Button>
        <p
          style={{
            width: "100%",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textAlign: "center",
          }}
        >
          Página: {page} de {info?.pages}
        </p>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === info?.pages}
        >
          Próxima pagina
        </Button>
      </div>
    </div>
  );
}
