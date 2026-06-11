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

function App() {
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
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartPage isShipping={isShipping} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products"
        element={<ProductPage setIsShipping={setIsShipping} />}
      />
      <Route
        path="/item/:id"
        element={<Item quantity={quantity} setQuantity={setQuantity!} />}
      />
      <Route
        path="/checkout"
        element={<CheckoutPage isShipping={isShipping} setOrder={setOrder} />}
      />
      <Route path="/order" element={<OrderPage orders={orders} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
