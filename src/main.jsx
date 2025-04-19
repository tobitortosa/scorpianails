import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PaymentStart from './Pages/PaymentStart/PaymentStart.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CompraExitosa from './Pages/CompraExitosa/CompraExitosa.jsx'
import './index.css'
import PaymentEnd from './Pages/PaymentEnd/PaymentEnd.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/comprar-primera-parte" element={<PaymentStart />} />
      <Route path="/comprar-segunda-parte" element={<PaymentEnd />} />
      <Route path="/compra-exitosa" element={<CompraExitosa />} />
    </Routes>
  </BrowserRouter>
)
