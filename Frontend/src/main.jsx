import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
import { ToastContainer } from "react-toastify";
import CaptainContext from "./context/CaptainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <CaptainContext>
    <UserContext>
    <BrowserRouter>
      <App />
      <ToastContainer/>
    </BrowserRouter>
    </UserContext>
    </CaptainContext>
  </StrictMode>
);
