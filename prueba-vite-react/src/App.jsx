
import './App.css'
import NavBar from './components/Navbar/NavBar'
import './components/Eventos/Eventos'
import Eventos from './components/Eventos/Eventos'
import { useState } from 'react'


function App() {
 const [valorBuscado,setValorBuscado]=useState('')
 const handleNavBarSearch=(value)=>{
  
  return(
    setValorBuscado(value)
  )
 }

  return (
    <>
    
      <NavBar onSearch={handleNavBarSearch}/>
      <Eventos Busqueda={valorBuscado}/>

     
    </>
  )
}

export default App
