import { useEffect } from "react"
import Header from "../../components/Header"

const HomePage = () => {

  useEffect(() => {
    document.title = 'Home page'
  }, [])

  return (
    <main>
      <Header />
    </main>
  )
}

export default HomePage
