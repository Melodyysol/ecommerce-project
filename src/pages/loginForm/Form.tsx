import { Link } from "react-router-dom"


const Form = ({ user }: { user: 'register' | 'login' }) => {


  return (
    <form action='' className="bg-base-100 m-auto rounded-2xl shadow hover:shadow-2xl py-5 px-10 w-4/5 max-w-100 flex flex-col gap-5">
      <h1 className="text-center text-3xl font-bold capitalize">{user}</h1>
      {user === 'register' && <div className="flex flex-col gap-1">
        <label htmlFor="username" className="label">
          <span className="capitalize">username</span>
        </label>
        <input type="text" className="input input-lg bg-base-200" />
      </div>}
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
        <button type="submit" className="btn btn-md btn-primary btn-block uppercase">{user}</button>
      </div>

      {user === 'login' && <button type="button" className="btn btn-md btn-secondary btn-block uppercase">Guest User</button>}
      <p className="text-center">{user === 'login' ? 'Not a member yet' : 'Already a member'}? <Link to={`/${user === 'login' ? 'register' : 'login'}`} className="ml-2 link link-hover link-primary capitalize">{user === 'login' ? 'register' : 'login'}</Link></p>
    </form>
  )
}

export default Form
