import { useActionState } from "react";
const increment = async (prev: number, formData: FormData) => {
  console.log(formData.get("name"));
  return prev + 1;
};

const FormAction = () => {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form>
      <h1>{state}</h1>
      <input
        type="text"
        name="name"
        placeholder="Type your name"
        className="input input-accent"
      />
      <button className="btn btn-primary" formAction={formAction}>
        Increment
      </button>
    </form>
  );
};

export default FormAction;
