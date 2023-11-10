import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Pokedex from "./Pages/Pokedex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/pokemon-challenge",
          element: <Home />,
        },
        {
          path: "/pokedex",
          element: <Pokedex />,
        },
      ])}
    />
  </React.StrictMode>
);
