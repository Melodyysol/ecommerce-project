import { Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/cart/CartPage";
import ProductPage from "./pages/productPage/ProductPage";
import Item from "./components/Item";
import axios from "axios";
import { productSchemaArrary, type Cart, type Products } from "./types";
import { useQuery } from "@tanstack/react-query";
import Register from "./pages/loginForm/Register";
import Login from "./pages/loginForm/Login";
import ProtectedRoute from "./pages/cart/ProtectedRoute";

const fetchProducts = async (): Promise<Products[]> => {
  try {
    const response = await axios.get("/api/react-store-products");
    // if (!response) throw new Error("Error in fetching data");

    const validatingProducts = productSchemaArrary.safeParse(response.data);

    if (!validatingProducts.success) {
      throw new Error(validatingProducts.error.message);
    }
    return validatingProducts.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error; // rethrow original error
    }

    throw new Error("Unknown error occurred", {
      cause: error,
    });
  }
};

function App() {
  const [currentUser, setCurrentUser] = useState<string | null>(() => {
    return window.localStorage.getItem("currentUser");
  });

  const [theme, setTheme] = useState<"winter" | "dracula">(() => {
    if (typeof window === "undefined") return "winter";
    const storedTheme = window.window.localStorage.getItem("theme");
    return storedTheme === "dracula" ? "dracula" : "winter";
  });
  const [carts, setCart] = useState<Cart[]>(() => {
    const savedCarts = window.window.localStorage.getItem("cart");
    return savedCarts ? JSON.parse(savedCarts) : [];
  });

  const [isShipping, setIsShipping] = useState<boolean>(false);

  const addToBag = (filteredItem: Products, activeColor: string) => {
    const newCart: Cart = {
      id: filteredItem.id,
      name: filteredItem.name,
      image: filteredItem.image,
      color: activeColor,
      company: filteredItem.company,
      price: filteredItem.price,
      quantity: quantity,
    };
    setCart((prev) => {
      const itemAlreadyExists = prev.some(
        (item) => item.id === newCart.id && item.color === newCart.color,
      );

      if (itemAlreadyExists) {
        return prev.map((item) =>
          item.id === newCart.id && item.color === newCart.color
            ? { ...item, quantity: item.quantity + newCart.quantity }
            : item,
        );
      }

      return [...prev, newCart];
    });
  };

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(carts));
  }, [carts]);

  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.window.localStorage.setItem("theme", theme);
  }, [theme]);

  const {
    data: products = [],
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["product"],
    queryFn: fetchProducts,
  });

  return (
    <Routes>
      <Route
        index
        element={
          <HomePage
            theme={theme}
            setTheme={setTheme}
            carts={carts}
            products={products}
            error={error}
            isError={isError}
            isLoading={isLoading}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        }
      />
      <Route
        path="/about"
        element={
          <AboutPage
            theme={theme}
            setTheme={setTheme}
            carts={carts}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <CartPage
            theme={theme}
            setTheme={setTheme}
            carts={carts}
            setCart={setCart}
            isShipping={isShipping}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        }
      />
      <Route
        path="/products"
        element={
          <ProtectedRoute currentUser={currentUser}>
            <ProductPage
              theme={theme}
              setTheme={setTheme}
              carts={carts}
              products={products}
              error={error}
              isError={isError}
              isLoading={isLoading}
              setIsShipping={setIsShipping}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/item/:id"
        element={
          <Item
            theme={theme}
            setTheme={setTheme}
            carts={carts}
            addToBag={addToBag}
            quantity={quantity}
            setQuantity={setQuantity!}
            products={products}
            error={error}
            isError={isError}
            isLoading={isLoading}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        }
      />
      <Route
        path="/login"
        element={<Login setCurrentUser={setCurrentUser} />}
      />
      <Route
        path="/register"
        element={<Register setCurrentUser={setCurrentUser} />}
      />
    </Routes>
  );
}

export default App;
