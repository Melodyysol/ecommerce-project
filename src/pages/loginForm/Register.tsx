import { useEffect } from "react";
import Form from "./Form";
import type { FormProps } from "../../types";
const Register = ({ setCurrentUser, toasts, setToasts }: FormProps) => {
  useEffect(() => {
    document.title = "Register";
  });

  return (
    <section className="w-screen h-screen flex">
      <Form
        user="register"
        setCurrentUser={setCurrentUser}
        toasts={toasts}
        setToasts={setToasts}
      />
    </section>
  );
};

export default Register;
