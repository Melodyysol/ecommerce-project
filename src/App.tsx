import { Routes, Route } from 'react-router-dom'

import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/cart/CartPage'
import ProductPage from './pages/productPage/ProductPage'
import Item from './components/Item'
import axios from 'axios'
import { productSchemaArrary, type Cart, type Products } from './types'
import { useQuery } from '@tanstack/react-query'
import Register from './pages/loginForm/Register'
import Login from './pages/loginForm/Login'


const fetchProducts = async (): Promise<Products[]> => {
  try {
    const response = await axios.get('/api/react-store-products')
    // if (!response) throw new Error("Error in fetching data");

    const validatingProducts = productSchemaArrary.safeParse(response.data);

    if (!validatingProducts.success) {
      throw new Error(validatingProducts.error.message);
    }
    return validatingProducts.data

  } catch (error) {
    if (error instanceof Error) {
      throw error; // rethrow original error
    }

    throw new Error('Unknown error occurred', {
      cause: error
    });

  }
}

function App() {
  const [theme, setTheme] = useState<'winter' | 'dracula'>(() => {
    if (typeof window === 'undefined') return 'winter'
    const storedTheme = window.localStorage.getItem('theme')
    return storedTheme === 'dracula' ? 'dracula' : 'winter'
  })
  const [carts, setCart] = useState<Cart[]>(() => {
    const savedCarts = localStorage.getItem('cart')
    return savedCarts ? JSON.parse(savedCarts) : []
  })
  const [quantity, setQuantity] = useState<number>(1)



  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])


  const {
    data: products = [],
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['product'],
    queryFn: fetchProducts
  })

  

  return (
    <Routes>
      <Route index element={<HomePage
        theme={theme} setTheme={setTheme}
        carts={carts}
        products={products}
        error={error}
        isError={isError}
        isLoading={isLoading}
      />} />
      <Route path='/about' element={<AboutPage
        theme={theme} setTheme={setTheme}
        carts={carts}
      />} />
      <Route path='/cart' element={<CartPage
        theme={theme} setTheme={setTheme}
        carts={carts} setCart={setCart}
        setQuantity={setQuantity}
      />} />
      <Route path='/products' element={<ProductPage
        theme={theme} setTheme={setTheme}
        carts={carts}
        products={products}
        error={error}
        isError={isError}
        isLoading={isLoading}
      />} />
      <Route path='/item/:id' element={<Item
        theme={theme} setTheme={setTheme}
        carts={carts} setCart={setCart}
        quantity={quantity} setQuantity={setQuantity!}
        products={products}
        error={error}
        isError={isError}
        isLoading={isLoading}
      />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
