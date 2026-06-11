import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import RenderHomePage from "./RenderHomePage";
import Toast from "../../components/Toast";
import { productContext } from "../../hooks/useProduct";
import { UserContext } from "../../hooks/user";
import { ToastContext } from "../../hooks/useToast";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home page";
  }, []);

  const { isError, error } = useContext(productContext);
  const userContext = useContext(UserContext);
  const toastContext = useContext(ToastContext);

  if (!userContext || !toastContext) {
    throw new Error("useUser must be used within UserProvider");
  }

  useEffect(() => {
    if (isError && error) {
      toastContext.dispatch({
        type: "error",
        payload: { message: error.message, id: crypto.randomUUID() },
      });
      localStorage.setItem(
        "toast",
        JSON.stringify({ message: error.message, id: crypto.randomUUID() }),
      );
    }
  }, [isError, error]);

  return (
    <main className="bg-base-100 text-base-content min-h-screen pb-15">
      <Header />
      <RenderHomePage />
      <div className=" gap-4 flex flex-col fixed top-5 left-0 right-0 pointer-events-none">
        {toastContext.toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => {
              toastContext.dispatch({
                type: "removeToast",
                payload: { id: toast.id },
              });
              localStorage.removeItem("toast");
            }}
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
