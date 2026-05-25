import { Routes, Route } from 'react-router-dom'

import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/productPage/ProductPage'

function App() {
  const [theme, setTheme] = useState<'winter' | 'dracula'>(() => {
    if (typeof window === 'undefined') return 'winter'
    const storedTheme = window.localStorage.getItem('theme')
    return storedTheme === 'dracula' ? 'dracula' : 'winter'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Routes>
      <Route index element={<HomePage
        theme={theme} setTheme={setTheme}
      />} />
      <Route path='/about' element={<AboutPage
        theme={theme} setTheme={setTheme}
      />} />
      <Route path='/cart' element={<CartPage
        theme={theme} setTheme={setTheme}
      />} />
      <Route path='/products' element={<ProductPage
        theme={theme} setTheme={setTheme}
      />} />
    </Routes>
  )
}

export default App
