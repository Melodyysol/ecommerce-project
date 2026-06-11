import { useEffect } from "react";
import Form from "./Form";
const Register = () => {
  useEffect(() => {
    document.title = "Register";
  });

  return (
    <section className="w-screen h-screen flex">
      <Form user="register" />
    </section>
  );
};

export default Register;
