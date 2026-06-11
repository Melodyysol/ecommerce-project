import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductProvider from "./contexts/ProdContext.tsx";
import { CartContextProvider } from "./contexts/CartContext.tsx";
import UserProvider from "./contexts/UserContext.tsx";
import ToastProvider from "./contexts/ToastContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ProductProvider>
            <CartContextProvider>
              <ToastProvider>
                <App />
              </ToastProvider>
            </CartContextProvider>
          </ProductProvider>
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
