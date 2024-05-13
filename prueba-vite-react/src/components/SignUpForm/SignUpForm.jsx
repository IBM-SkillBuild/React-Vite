import { useState } from "react"

const SignUpForm=()=>{
const [name,setName]=useState('')
const [direccion, setDireccion]=useState('')

const handleClearForm=()=>{
    setName('')
    setDireccion('')
}

const handleSubmitForm=()=>{

}
    return(
        <form  onSubmit={handleSubmitForm}>
            <label htmlFor="">
                name.......
                <input type="text" value={name} onChange={(evt)=>setName(evt.target.value)}/>
            </label>
            <br />
            <label htmlFor="">
                dirección
                <input type="text" value={direccion} onChange={(evt)=>setDireccion(evt.target.value)} />
            </label>
            <br />
            <div>
                <button onClick={handleClearForm}>Clear</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default SignUpForm