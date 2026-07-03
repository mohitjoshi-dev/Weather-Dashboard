import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "leaflet/dist/leaflet.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeProvider";
import { SettingsProvider } from "./context/SettingsProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
    <SettingsProvider>
        <App />
    </SettingsProvider>
    </ThemeProvider>  
  </StrictMode>
);