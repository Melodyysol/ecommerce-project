import { Link } from "react-router-dom"


const Form = () => {
  return (
    <form action="" className="bg-base-100 m-auto rounded-2xl shadow hover:shadow-2xl py-5 px-10 w-4/5 max-w-100 flex flex-col gap-5">
      <h1 className="text-center text-3xl font-bold ">Login</h1>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="label">
          <span className="capitalize">email</span>
        </label>
        <input type="email" className="input input-lg bg-base-200" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="label">
          <span className="capitalize">password</span>
        </label>
        <input type="password" className="input input-lg bg-base-200" />
      </div>
      <div>
        <button type="submit" className="btn btn-lg btn-primary btn-block uppercase">Login</button>
      </div>

      <button type="button" className="btn btn-lg btn-secondary btn-block uppercase">Guest User</button>
      <p className="text-center">Not a member yet? <Link to="/register" className="ml-2 link link-hover link-primary capitalize">Register</Link></p>
    </form>
  )
}

export default Form
