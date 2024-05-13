import { useState } from "react"

export const NavBar = () => {

    const [dataForm, setDataForm] = useState()

    const handleChange = (event) =>{
        setDataForm(event.target.value)
        console.log(dataForm)
        event.preventDefault()
    }

    const handleForm = (event) =>{
        console.log(dataForm)
        event.preventDefault()
    }
    return (
        <>
            <form action="#" className="flex  flex-col items-center justify-center  h-64 gap-2.5" onSubmit={handleForm}>
                <p className="">Eventos</p>

                <input type="text" placeholder="Buscar evento favorito" onChange={handleChange} />
                <button className="bg-blue-500 p-2 border rounded-lg  w-40"  >Buscar</button>
            </form>

        </>
    )
}
