import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import ProductProvider from "./contexts/ProductContext";
import { CartContextProvider } from "./contexts/CartContext";
import ToastProvider from "./contexts/ToastContext";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("App", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
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
      </MemoryRouter>,
    );
  });

  it("renders without crashing", () => {
    expect(screen.getByText("Loading...")).toBeDefined();
  });
  // it("renders home page correctly", () => {
  // });
});
