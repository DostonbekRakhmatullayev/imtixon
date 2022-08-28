import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { LangProvider } from "./context/langContext";
import { ThemeProvider } from "./context/ThemContext";
import { RegisterProvider } from "./context/RedisterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <RegisterProvider>
    <ThemeProvider>
      <AuthProvider>
        <LangProvider>
          <App />
        </LangProvider>
      </AuthProvider>
    </ThemeProvider>
  </RegisterProvider>
  </BrowserRouter>
);
