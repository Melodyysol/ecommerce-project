import { useEffect } from "react"
import Header from "../../components/Header"
import RenderHomePage from "./RenderHomePage"
import type { ThemeProp } from "../../types"

const HomePage = ({theme, setTheme}: ThemeProp) => {


  useEffect(() => {
    document.title = 'Home page'
  }, [])

  return (
    <main className="bg-base-100 text-base-content min-h-screen pb-15">
      <Header theme={theme} setTheme={setTheme} />
      <RenderHomePage />
    </main>
  )
}

export default HomePage
