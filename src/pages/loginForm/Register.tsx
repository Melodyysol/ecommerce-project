import { useEffect } from "react"
import Form from "./Form"
const Register = () => {
  useEffect(() => {
    document.title = 'Login'
  })

  return (
    <section className="w-screen h-screen flex">
      <Form />
    </section>
  )
}

export default Register
