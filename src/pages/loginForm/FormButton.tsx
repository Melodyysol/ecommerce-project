import { useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`btn ${pending ? "btn-primary text-base-content" : "btn-success text-success-content"}`}
    >
      {pending ? "Submiting" : "Submit"}
    </button>
  );
};

export default FormButton;
