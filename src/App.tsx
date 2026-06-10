import { Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/cart/CartPage";
import ProductPage from "./pages/productPage/ProductPage";
import Item from "./components/Item";
import { type Order } from "./types/types";
import Register from "./pages/loginForm/Register";
import Login from "./pages/loginForm/Login";
import ProtectedRoute from "./pages/cart/ProtectedRoute";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrderPage from "./pages/order/OrderPage";
import FormPra from "./pages/loginForm/FormPra";
import FormAction from "./pages/loginForm/FormAction";

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

  const [orders, setOrder] = useState<Order[]>(() => {
    const savedOrders = window.localStorage.getItem("order");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const [isShipping, setIsShipping] = useState<boolean>(false);

  useEffect(() => {
    window.localStorage.setItem("order", JSON.stringify(orders));
  }, [orders]);

  const [quantity, setQuantity] = useState<number>(1);

  return (
    <Routes>
      <Route
        index
        element={
          <HomePage
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
              isShipping={isShipping}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              toasts={toasts}
              setToasts={setToasts}
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products"
        element={
          <ProductPage
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
            quantity={quantity}
            setQuantity={setQuantity!}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            toasts={toasts}
            setToasts={setToasts}
          />
        }
      />
      <Route
        path="/checkout"
        element={
          <CheckoutPage
            isShipping={isShipping}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setOrder={setOrder}
          />
        }
      />
      <Route
        path="/order"
        element={
          <OrderPage
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            orders={orders}
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
      <Route path="/form" element={<FormPra />} />
      <Route path="/form-action" element={<FormAction />} />
    </Routes>
  );
}

export default App;
