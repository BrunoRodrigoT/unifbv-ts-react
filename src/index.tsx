import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global/styles/globals.css";
import { TodoProvider } from "./contexts/ToDoContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
