import ItemsEventos from "./ItemsEventos"
import data from '../../data/eventos.json'
const Allevents=data._embedded.events


// eslint-disable-next-line react/prop-types
const Eventos=({Busqueda})=>{
    
function handleEventItemClickMostrarId(id){
    
return(
    alert(id)
)
}    

const renderEvents=()=>{
    let filtrado=Allevents
    // eslint-disable-next-line react/prop-types
    if (Busqueda.length>0){
        filtrado=filtrado.filter((item)=>item.name.toLocaleLowerCase().includes(Busqueda.toLocaleLowerCase()))
        
        
        

    }                                               
    return( filtrado.map((item)=>
        <ItemsEventos
         key={item.id}
         id={item.id}
         name={item.name}
         info={item.url} 
         image={item.images[0].url}
         OnEventItemClickMostrarId={handleEventItemClickMostrarId}
         />))
}



return(
        <div style={{backgroundColor:"gray",width:"80%"}}>
            <h4>Listado de eventos</h4>
            {renderEvents()}
        </div>
    )
}

export default Eventos