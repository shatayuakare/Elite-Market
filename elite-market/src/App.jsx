import { lazy } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Header = lazy(() => import('./pages/Header'))
const Error = lazy(() => import('./components/Error'))
const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/about/About'))
const Products = lazy(() => import('./pages/products/Products'))
const Cart = lazy(() => import('./pages/products/Cart'))
const Contact = lazy(() => import('./pages/contact/Contact'))
const Login = lazy(() => import('./pages/auth/Login'))
const Signup = lazy(() => import('./pages/auth/Signup'))
const Footer = lazy(() => import('./pages/Footer'))

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Error />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
