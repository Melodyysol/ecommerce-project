import type { ReactNode } from "react";
import { useReducer } from "react";
import { ToastContext, toastReducer } from "../hooks/useToast";

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, dispatch] = useReducer(toastReducer, []);

  // useEffect(() => {
  //   localStorage.setItem("toast", JSON.stringify(toasts))
  //   console.log(toasts)
  // }, [toasts])

  return (
    <ToastContext.Provider value={{ toasts, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
};
export default ToastProvider;
