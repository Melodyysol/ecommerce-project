import { useEffect, useReducer, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { type FormData } from "../../types";
import Toast from "../../components/Toast";

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

const Form = ({
  user,
  setCurrentUser,
  toasts,
  setToasts,
}: {
  user: "register" | "login";
  setCurrentUser: (user: { username: string; email: string } | null) => void;
  toasts: {
    message: string;
    type: "success" | "error";
    id: number;
  }[];
  setToasts: React.Dispatch<
    React.SetStateAction<
      {
        message: string;
        type: "error" | "success";
        id: number;
      }[]
    >
  >;
}) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";

  const [registeredData, setRegisteredData] = useState<FormData[]>(() => {
    const savedData = window.localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : [];
  });

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const [loading, dispatchLoading] = useReducer(
    (state: { guest: boolean; user: boolean }, action: "guest" | "user") => {
      switch (action) {
        case "guest":
          return { ...state, guest: true };
        case "user":
          return { ...state, user: true };
        default:
          return state;
      }
    },
    { guest: false, user: false },
  );

  const [errorMessages, setErrorMessages] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (user === "register") {
      const username = usernameRef.current?.value;

      if (!username || !email || !password) return;

      const isDuplicate = registeredData.some((data) => data.email === email);
      if (isDuplicate) {
        setErrorMessages((prev) => ({
          ...prev,
          email: "This email is already registered.",
        }));
        return;
      }
      setErrorMessages({ username: "", email: "", password: "" });
      setRegisteredData((prev) => [...prev, { username, email, password }]);

      setCurrentUser({ username, email });
      window.localStorage.setItem(
        "currentUser",
        JSON.stringify({ username, email }),
      );
      dispatchLoading("user");
      setTimeout(() => {
        navigate(fromPage, { replace: true });
      }, 3000);
    } else {
      const userData = registeredData.find((data) => data.email === email);
      if (!userData) {
        setErrorMessages((prev) => ({
          ...prev,
          email: "No account found with this email.",
        }));
        return;
      }
      if (userData.password !== password) {
        setErrorMessages((prev) => ({
          ...prev,
          password: "Incorrect password.",
        }));
        return;
      }
      setErrorMessages({ username: "", email: "", password: "" });
      setCurrentUser({
        username: userData.username || "demo user",
        email: userData.email,
      });
      dispatchLoading("user");
      setTimeout(() => {
        navigate(fromPage, { replace: true });
      }, 3000);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("formData", JSON.stringify(registeredData));
  }, [registeredData]);

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
          {errorMessages[formInput.name as keyof FormData] && (
            <p className="text-sm text-error">
              {errorMessages[formInput.name as keyof FormData]}
            </p>
          )}
        </div>
      ))}

      <div>
        <button
          disabled={loading.user}
          type="submit"
          className={
            loading.user
              ? "btn btn-md btn-neutral btn-block uppercase"
              : "btn btn-md btn-primary btn-block uppercase"
          }
        >
          {loading.user ? "sending" : user}
        </button>
      </div>

      {user === "login" && (
        <button
          type="button"
          disabled={loading.guest}
          className={
            loading.guest
              ? "btn btn-md btn-neutral btn-block uppercase"
              : "btn btn-md btn-secondary btn-block uppercase"
          }
          onClick={() => {
            setCurrentUser({ username: "demo user", email: "demo@user.com" });
            window.localStorage.setItem(
              "currentUser",
              JSON.stringify({ username: "demo user", email: "demo@user.com" }),
            );
            dispatchLoading("guest");
            setTimeout(() => {
              navigate(fromPage, { replace: true });
            }, 3000);
          }}
        >
          {loading.guest ? "sending" : "guest user"}
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
    </form>
  );
};

export default Form;
