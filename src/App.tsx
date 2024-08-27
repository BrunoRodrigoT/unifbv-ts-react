import React from "react";
import { Title, Button } from "./components";

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
