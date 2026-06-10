import FormButton from "./FormButton";

const FormPra = () => {
  const formAction = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(userData);
  };

  return (
    <form action={formAction}>
      <br />
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" className="input input-accent" />
      <br />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className="input input-accent"
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        className="input input-accent"
      />

      <FormButton />
    </form>
  );
};

export default FormPra;
