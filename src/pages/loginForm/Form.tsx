import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { type FormData } from "../../types/auth";
import Toast from "../../components/Toast";
import { useForm, type SubmitHandler } from "react-hook-form";
import { UserContext } from "../../hooks/useUser";
import { ToastContext } from "../../hooks/useToast";

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

const Form = ({ user }: { user: "register" | "login" }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const toastContext = useContext(ToastContext);

  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";

  const userContext = useContext(UserContext);
  if (!userContext || !toastContext) {
    throw new Error("useUser must be used within UserProvider");
  }

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
      const username = data.username || "demo";
      const email = data.email;

      const userId = crypto.randomUUID();
      const newUserData = {
        ...data,
        userId: userId,
      };

      setRegisteredData((prev) => [...prev, newUserData]);

      const newUser = { userId, username, email };
      userContext.setUser(newUser);

      localStorage.setItem("user", JSON.stringify(newUser));
      navigate(fromPage, { replace: true });
      const newToast = {
        id: crypto.randomUUID(),
        message: "Account created successfully",
      };
      toastContext.dispatch({
        type: "success",
        payload: newToast,
      });
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
        const newToast = {
          id: crypto.randomUUID(),
          message: "Incorrect password.",
        };
        toastContext.dispatch({
          type: "error",
          payload: newToast,
        });
        return;
      }
      const userLoggedIn = {
        userId: userData.userId,
        username: userData.username || "demo",
        email: userData.email,
      };

      userContext.setUser(userLoggedIn);
      localStorage.setItem("user", JSON.stringify(userLoggedIn));

      navigate(fromPage, { replace: true });

      const newToast = {
        message: `Welcome back, ${userLoggedIn.username}!`,
        id: crypto.randomUUID(),
      };
      toastContext.dispatch({
        type: "success",
        payload: newToast,
      });
    }
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
              pattern:
                formInput.name === "email"
                  ? {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    }
                  : undefined,
              minLength:
                formInput.name === "password"
                  ? {
                      value: 8,
                      message: "Password must be atleast 8 characters",
                    }
                  : undefined,
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
          disabled={!isValid || isSubmitting}
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
          disabled={!isValid || isSubmitting}
          className={
            isSubmitting
              ? "btn btn-md btn-neutral btn-block uppercase"
              : "btn btn-md btn-secondary btn-block uppercase"
          }
          onClick={() => {
            userContext.setUser({
              userId: "demo",
              username: "demo",
              email: "demo@user.com",
            });
            window.localStorage.setItem(
              "user",
              JSON.stringify({ userId: "demo", username: "demo", email: "demo@user.com" }),
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
            }}
          />
        ))}
      </div>
    </form>
  );
};

export default Form;
