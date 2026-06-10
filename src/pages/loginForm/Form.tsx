import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { type FormData } from "../../types/types";
import Toast from "../../components/Toast";
import { useForm, type SubmitHandler } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>();

  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";

  const [registeredData, setRegisteredData] = useState<FormData[]>(() => {
    const savedData = window.localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : [];
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (user === "register") {
      const isDuplicate = registeredData.some((d) => d.email === data.email);
      if (isDuplicate) {
        setError("email", {
          type: "manual",
          message: "This email has already been registered.",
        });
        return;
      }
      const username = data.username || "demo user";
      const email = data.email;

      setRegisteredData((prev) => [...prev, data]);
      setCurrentUser({ username, email });

      localStorage.setItem("currentUser", JSON.stringify({ username, email }));
      navigate(fromPage, { replace: true });
    } else {
      const userData = registeredData.find((d) => d.email === data.email);
      if (!userData) {
        setError("email", {
          type: "manual",
          message: "No account found with this email.",
        });
        return;
      }
      if (userData.password !== data.password) {
        setError("password", {
          type: "manual",
          message: "Incorrect password.",
        });
        return;
      }
      const loggedInUser = {
        username: userData.username || "demo user",
        email: userData.email,
      };

      setCurrentUser(loggedInUser);

      localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
      navigate(fromPage, { replace: true });
    }
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem("formData", JSON.stringify(registeredData));
  }, [registeredData]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-base-100 m-auto rounded-2xl shadow hover:shadow-2xl py-5 px-10 w-4/5 max-w-100 flex flex-col gap-5"
    >
      <h1 className="text-center text-3xl font-bold capitalize">{user}</h1>
      {user === "register" && (
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="label">
            <span className="capitalize">username</span>
          </label>
          <input
            {...register("username", {
              required: "Username is not provided",
              minLength: {
                value: 3,
                message: "Username must be atleast 3 characters",
              },
            })}
            type="text"
            className="input input-lg bg-base-200"
          />
          {errors.username && (
            <p className="text-sm text-error">{errors.username.message}</p>
          )}
        </div>
      )}

      {formInputs.map((formInput) => (
        <div key={formInput.id} className="flex flex-col gap-1">
          <label htmlFor={formInput.name} className="label">
            <span className="capitalize">{formInput.name}</span>
          </label>
          <input
            type={formInput.name}
            {...register(formInput.name as keyof FormData, {
              required:
                formInput.name === "email"
                  ? "Email must be provided"
                  : "Password must be provided",
              pattern: formInput.name === "email" ? {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              } : undefined,
              minLength: formInput.name === "password" ? {
                value: 8,
                message: "Password must be atleast 8 characters",
              } : undefined,
            })}
            className="input input-lg bg-base-200"
          />

          {errors[formInput.name as keyof FormData] && (
            <p className="text-sm text-error">
              {errors[formInput.name as keyof FormData]?.message}
            </p>
          )}
        </div>
      ))}

      <div>
        <button
          disabled={!isValid}
          type="submit"
          className={
            isSubmitting
              ? "btn btn-md btn-neutral btn-block uppercase"
              : "btn btn-md btn-primary btn-block uppercase"
          }
        >
          {isSubmitting ? "sending" : user}
        </button>
      </div>

      {user === "login" && (
        <button
          type="button"
          disabled={isSubmitting}
          className={
            isSubmitting
              ? "btn btn-md btn-neutral btn-block uppercase"
              : "btn btn-md btn-secondary btn-block uppercase"
          }
          onClick={() => {
            setCurrentUser({ username: "demo user", email: "demo@user.com" });
            window.localStorage.setItem(
              "currentUser",
              JSON.stringify({ username: "demo user", email: "demo@user.com" }),
            );
            navigate(fromPage, { replace: true });
          }}
        >
          {isSubmitting ? "sending" : "guest user"}
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
