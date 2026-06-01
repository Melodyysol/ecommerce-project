import { useEffect } from "react"
import Form from "./Form"

const Login = ({ setCurrentUser }: { setCurrentUser: (user: string | null) => void }) => {

  useEffect(() => {
    document.title = 'Login'
  })

  return (
    <section className="w-screen h-screen flex">
      <Form user="login" setCurrentUser={setCurrentUser} />
    </section>
  )
}

export default Login
