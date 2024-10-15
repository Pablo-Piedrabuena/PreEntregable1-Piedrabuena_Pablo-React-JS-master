import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/productos', label: 'productos' },
  { href: '/contacto', label: 'Contacto' },
];

function App() {
  return (
    <>
    <NavBar logo="/src/assets/logo.png" links={links}></NavBar>
    
    <Routes>
      <Route path='/productos' element={<ItemListContainer titulo="Nuestros Productos"></ItemListContainer>}></Route>
      <Route path='/productos/:categonia' element={<ItemListContainer titulo="Nuestros Productos"></ItemListContainer>}></Route>
      <Route path='/productos/:categonia/:itemID' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
    </Routes>
    <Footer/>
    </>
    
  )
}

export default App
