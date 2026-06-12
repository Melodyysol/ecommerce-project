import { Routes, Route, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/cart/CartPage";
import ProductPage from "./pages/productPage/ProductPage";
import ProductItem from "./components/ProductItem";
import { type Order } from "./types/order";
import Register from "./pages/loginForm/Register";
import Login from "./pages/loginForm/Login";
import ProtectedRoute from "./pages/cart/ProtectedRoute";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrderPage from "./pages/order/OrderPage";
import { setFavicon } from "./utilities/favicon";
import Page from "./components/Page";
import { AnimatePresence } from "motion/react";

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
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      setFavicon("/favicons/favicon-home.svg");
    } else if (path.startsWith("/products") || path.startsWith("/item")) {
      setFavicon("/favicons/favicon-products.svg");
    } else if (path.startsWith("/cart")) {
      setFavicon("/favicons/favicon-cart.svg");
    } else if (path.startsWith("/checkout")) {
      setFavicon("/favicons/favicon-checkout.svg");
    } else if (path.startsWith("/order")) {
      setFavicon("/favicons/favicon-order.svg");
    } else if (path.startsWith("/about")) {
      setFavicon("/favicons/favicon-about.svg");
    } else {
      setFavicon("/favicons/favicon-home.svg");
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Page><HomePage /></Page>} />
        <Route path="/about" element={<Page><AboutPage /></Page>} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Page><CartPage isShipping={isShipping} /></Page>
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={<Page><ProductPage setIsShipping={setIsShipping} /></Page>}
        />
        <Route
          path="/item/:id"
          element={<Page><ProductItem quantity={quantity} setQuantity={setQuantity} /></Page>}
        />
        <Route
          path="/checkout"
          element={<Page><CheckoutPage isShipping={isShipping} setOrder={setOrder} /></Page>}
        />
        <Route path="/order" element={<Page><OrderPage orders={orders} /></Page>} />
        <Route path="/login" element={<Page><Login /></Page>} />
        <Route path="/register" element={<Page><Register /></Page>} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
