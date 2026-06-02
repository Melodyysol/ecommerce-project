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
  const [currentUser, setCurrentUser] = useState<{
    username: string;
    email: string;
  } | null>(() => {
    const storedUser = window.localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [toasts, setToasts] = useState<
    { message: string; type: "error" | "success"; id: number }[]
  >([]);

  const [theme, setTheme] = useState<"winter" | "dracula">(() => {
    if (typeof window === "undefined") return "winter";
    const storedTheme = window.localStorage.getItem("theme");
    return storedTheme === "dracula" ? "dracula" : "winter";
  });

  const resolveCartKey = (user: { username: string; email: string } | null) => {
    console.log(user?.email);

    return user
      ? `cart_${user.email.replace(/\s+/g, "_").toLowerCase()}`
      : "cart_guest";
  };

  const cartStorageKey = resolveCartKey(currentUser);
  const [carts, setCart] = useState<Cart[]>(() => {
    const initialUser = window.localStorage.getItem("currentUser");
    if (!initialUser) {
      return [];
    }
    const parsedUser = JSON.parse(initialUser);
    const initialCartKey = resolveCartKey(parsedUser);
    const savedCarts = window.localStorage.getItem(initialCartKey);
    return savedCarts ? JSON.parse(savedCarts) : [];
  });

  useEffect(() => {
    const savedCarts = window.localStorage.getItem(cartStorageKey);
    const parsedCart = savedCarts ? JSON.parse(savedCarts) : [];

    if (JSON.stringify(parsedCart) !== JSON.stringify(carts)) {
      setCart(parsedCart);
    }
  }, [currentUser, cartStorageKey]);

  useEffect(() => {
    window.localStorage.setItem(cartStorageKey, JSON.stringify(carts));
  }, [carts, cartStorageKey]);

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
        setToasts((prev) => [
          ...prev,
          {
            message: "Successfully added to the quantity",
            type: "success",
            id: Date.now(),
          },
        ]);
        return prev.map((item) =>
          item.id === newCart.id && item.color === newCart.color
            ? { ...item, quantity: item.quantity + newCart.quantity }
            : item,
        );
      }

      setToasts((prev) => [
        ...prev,
        {
          message: "Successfully added to cart",
          type: "success",
          id: Date.now(),
        },
      ]);
      return [...prev, newCart];
    });
  };

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(carts));
  }, [carts]);

  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
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
            toasts={toasts}
            setToasts={setToasts}
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
          <ProtectedRoute currentUser={currentUser}>
            <CartPage
              theme={theme}
              setTheme={setTheme}
              carts={carts}
              setCart={setCart}
              isShipping={isShipping}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products"
        element={
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
            toasts={toasts}
            setToasts={setToasts}
          />
        }
      />
      <Route
        path="/login"
        element={
          <Login
            setCurrentUser={setCurrentUser}
            toasts={toasts}
            setToasts={setToasts}
          />
        }
      />
      <Route
        path="/register"
        element={
          <Register
            setCurrentUser={setCurrentUser}
            toasts={toasts}
            setToasts={setToasts}
          />
        }
      />
    </Routes>
  );
}

export default App;
