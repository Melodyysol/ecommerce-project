import { useEffect } from "react"
import Header from "../components/Header"
import type { ThemeProp } from "../types"
const AboutPage = ({ theme, setTheme }: ThemeProp) => {

  useEffect(() => {
    document.title = 'About'
  }, [])

  return (
    <main>
      <Header theme={theme} setTheme={setTheme} />
      <section className="w-10/12 mx-auto mt-20 text-base-content">
        <h1 className="text-center text-4xl md:text-6xl font-bold">We love <span className="bg-primary text-gray-300 rounded-2xl py-4 px-8 md:text-3xl">Comfy</span></h1>
        <p className="mt-10 max-w-2xl mx-auto leading-loose text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!</p>
      </section>
    </main>
  )
}

export default AboutPage
