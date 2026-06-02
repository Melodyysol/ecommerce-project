import { useEffect } from "react";
import Header from "../../components/Header";
import RenderHomePage from "./RenderHomePage";
import type { HomePageProps } from "../../types";
import Toast from "../../components/Toast";

const HomePage = ({
  theme,
  setTheme,
  products,
  isLoading,
  isError,
  error,
  carts,
  currentUser,
  setCurrentUser,
  toasts,
  setToasts,
}: HomePageProps) => {
  useEffect(() => {
    document.title = "Home page";
  }, []);

  useEffect(() => {
    if (currentUser) {
      setToasts([
        {
          message: `Welcome back, ${currentUser.username}!`,
          type: "success",
          id: Date.now(),
        },
      ]);
    } else {
      setToasts([
        {
          message: "Welcome to our store! Please log in or register.",
          type: "success",
          id: Date.now(),
        },
      ]);
    }
    setTimeout(() => {
      setToasts([]);
    }, 3000);
  }, [currentUser, setToasts]);

  useEffect(() => {
    if (isError && error) {
      setToasts((prev) => [
        ...prev,
        { message: error.message, type: "error", id: Date.now() },
      ]);
    }
  }, [isError, error, setToasts]);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <main className="bg-base-100 text-base-content min-h-screen pb-15">
      <Header
        theme={theme}
        setTheme={setTheme}
        carts={carts}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <RenderHomePage
        products={products}
        error={error}
        isError={isError}
        isLoading={isLoading}
      />
      <div className=" gap-4 flex flex-col fixed top-5 left-0 right-0 pointer-events-none">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
