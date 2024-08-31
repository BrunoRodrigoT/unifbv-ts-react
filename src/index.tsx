import React from "react";
import ReactDOM from "react-dom/client";
import "./global/styles/globals.css";
import { TodoProvider } from "./contexts/ToDoContext";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoProvider>
      <RouterProvider router={routes} />
    </TodoProvider>
  </React.StrictMode>
);
