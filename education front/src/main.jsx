import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import "./index.scss";
import BasketProvider from "./assets/context/basketContext.jsx";
import WishlistProvider from "./assets/context/WishlistContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BasketProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </BasketProvider>
    </HelmetProvider>
  </React.StrictMode>
);
