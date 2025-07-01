
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StorecontextProvider from "./component/context/StoreContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StorecontextProvider>
      <App />
    </StorecontextProvider>
  </BrowserRouter>
);
