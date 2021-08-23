import React from 'react'
import Categories from './components/Categories';
import Products from './components/Products';
import Headers from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { useState } from 'react';
function App() {
  const [showCartList, setshowCartList] = useState(false)
  function handleShow() {
    setshowCartList(!showCartList);
  }
  return (
    <div>
      <Headers show={handleShow} />
      <Categories />
      {showCartList && <Cart />}
      <Products />
      <Footer />
    </div>
  )
}

export default App