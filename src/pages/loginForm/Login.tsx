import { useEffect } from "react";
import Form from "./Form";
import type { FormProps } from "../../types/types";

const Login = ({ setCurrentUser, toasts, setToasts }: FormProps) => {
  useEffect(() => {
    document.title = "Login";
  });

  return (
    <section className="w-screen h-screen flex">
      <Form
        user="login"
        setCurrentUser={setCurrentUser}
        toasts={toasts}
        setToasts={setToasts}
      />
    </section>
  );
};

export default Login;
