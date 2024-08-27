import React from "react";
import Title from "./components/Title";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Title style={{ color: "blue", textDecoration: "underline" }}>
        HELLO WORLD
      </Title>
      <Button onClick={() => console.log("clicked")}>CLICK ME</Button>
    </div>
  );
}

export default App;
