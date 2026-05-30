import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const formInputs: { id: number; name: string }[] = [
  {
    id: 1,
    name: "email",
  },
  {
    id: 2,
    name: "password",
  },
];

type FormData = { username?: string; email: string; password: string };

const Form = ({ user }: { user: "register" | "login" }) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [registeredData, setregisteredData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      const username = usernameRef.current?.value;
      const email = emailRef.current!.value;
      const password = passwordRef.current!.value;

      setregisteredData({ username, email, password });

    console.log(registeredData);
    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-base-100 m-auto rounded-2xl shadow hover:shadow-2xl py-5 px-10 w-4/5 max-w-100 flex flex-col gap-5"
    >
      <h1 className="text-center text-3xl font-bold capitalize">{user}</h1>
      {user === "register" && (
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="label">
            <span className="capitalize">username</span>
          </label>
          <input
            required
            ref={usernameRef}
            type="text"
            className="input input-lg bg-base-200"
          />
        </div>
      )}

      {formInputs.map((formInput) => (
        <div key={formInput.id} className="flex flex-col gap-1">
          <label htmlFor={formInput.name} className="label">
            <span className="capitalize">{formInput.name}</span>
          </label>
          <input
            required
            ref={formInput.name === "email" ? emailRef : passwordRef}
            type={formInput.name}
            className="input input-lg bg-base-200"
          />
        </div>
      ))}
      <div>
        <button
          type="submit"
          className="btn btn-md btn-primary btn-block uppercase"
        >
          {user}
        </button>
      </div>

      {user === "login" && (
        <button
          type="button"
          className="btn btn-md btn-secondary btn-block uppercase"
        >
          Guest User
        </button>
      )}
      <p className="text-center">
        {user === "login" ? "Not a member yet" : "Already a member"}?{" "}
        <Link
          to={`/${user === "login" ? "register" : "login"}`}
          className="ml-2 link link-hover link-primary capitalize"
        >
          {user === "login" ? "register" : "login"}
        </Link>
      </p>
    </form>
  );
};

export default Form;
