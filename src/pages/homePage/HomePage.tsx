import { useEffect, useState } from "react"
import Header from "../../components/Header"
import Home from "./Home"

const HomePage = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false)

  useEffect(() => {
    document.title = 'Home page'
  }, [])

  return (
    <main onClick={() => setShowMenu(false)}>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Home />
    </main>
  )
}

export default HomePage
