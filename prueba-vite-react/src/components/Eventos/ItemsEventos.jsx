// eslint-disable-next-line react/prop-types
const ItemsEventos=({id,info,name,image,OnEventItemClickMostrarId})=>{
return(
    <div style={{backgroundColor:"gray",width:"100%",marginBottom:"50px"}}>
        <a style={{color:"whitesmoke"}}href={info}>reservar {name}</a>
        <br />
        <br />
      
        <img src={image} alt={name} width={300} height={200} style={{cursor:"pointer"}}
        onClick={(evt)=>{
            evt.stopPropagation()
            OnEventItemClickMostrarId(id)}} />
        <br />
        <button onClick={(evt)=>{
            evt.stopPropagation()
            OnEventItemClickMostrarId(id)}}>ver más</button>
        <br />
        <hr />
       
    </div>
)
}

export default ItemsEventos