import { useState } from "react"



// eslint-disable-next-line react/prop-types
const NavBar=({onSearch})=>{
    const handleBuscar=(evt)=>{
       
        return(
         setSearch(evt.target.value)
                 
        )
    }
    const handleKeyDown=(evt)=>{
        console.log(evt.key)
       if (evt.key === "Enter" ){
             onSearch(search)
       }
       if (evt.key==='Backspace' && search.length<2){
        onSearch('')
    }
    }
    const[search,setSearch]=useState("")
    return(
        <div>
           <p>mis eventos navbar</p>
           <input type="text" placeholder="Busca Evento"
           onChange={handleBuscar} value={search}
           onKeyDown={handleKeyDown}/>
           
           
        </div>
    )
}

export default NavBar




































































































