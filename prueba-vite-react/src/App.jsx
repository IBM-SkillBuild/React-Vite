
import './App.css'
import NavBar from './components/Navbar/NavBar'
import './components/Eventos/Eventos'
import Eventos from './components/Eventos/Eventos'
import './components/SignUpForm/SignUpForm'
import { useState } from 'react'
import SignUpForm from './components/SignUpForm/SignUpForm'


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
      <SignUpForm/>

     
    </>
  )
}

export default App
