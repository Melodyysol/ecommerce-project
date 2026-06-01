import { useEffect } from "react"
import Form from "./Form"
const Register = ({ setCurrentUser }: { setCurrentUser: (user: string | null) => void }) => {
  useEffect(() => {
    document.title = 'Register'
  })

  return (
    <section className="w-screen h-screen flex">
      <Form user="register" setCurrentUser={setCurrentUser} />
    </section>
  )
}

export default Register
