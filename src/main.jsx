import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Products from './Products.jsx'
import Card from './Card.jsx'
import Mid from './Mid.jsx'
import Testimonials from './Testimonials.jsx'
import Form from './Form.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Products />
    <Card />
    <Mid />
    <Testimonials />
    <Form />
    <Footer />
  </React.StrictMode>,
)
