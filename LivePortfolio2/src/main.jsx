import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import SmoothScrollProvider from "./components/SmoothScrollProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <SmoothScrollProvider>
        <App />
      </SmoothScrollProvider>
    </Router>
  </StrictMode>,
);
