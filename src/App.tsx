import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage/HomePage'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  )
}

export default App
