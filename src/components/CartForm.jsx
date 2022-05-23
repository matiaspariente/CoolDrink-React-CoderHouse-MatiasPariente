import React from 'react'
import { useState , useEffect} from "react";

const CartForm = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        telefono:'',
        email:'',
        emailConf:''
    })

    const [mailConf, setMailConf] = useState(false);

    useEffect(()=> {
        if (datos.email === datos.emailConf && datos.email !== ''){
            setMailConf(true)
        }else{
            setMailConf(false)
        }   
      }, [datos])

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido + ' ' + datos.telefono + ' ' + datos.email)
    }

  return (
    <>  
        <div className="w-full max-w-3xl mt-20">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={enviarDatos}>
                <h1 className="block text-gray-700 text-xl font-bold mb-2 text-center">Ingrese los datos de su compra:</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Nombre
                    </label>
                    <input type="text" placeholder="Nombre" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Apellido
                    </label>
                    <input type="text" placeholder="Apellido" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInputChange} name="apellido"></input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Telefono
                    </label>
                    <input type="number" placeholder="Telefono" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInputChange} name="telefono"></input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        E-Mail
                    </label>
                    <input type="text" placeholder="E-Mail" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInputChange} name="email"></input>
                </div>
                {mailConf ?
                    <> 
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Confirmar E-Mail
                        </label>
                        <input type="text" placeholder="Confirmar E-Mail" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInputChange} name="emailConf"></input>
                    </div>
                    <button type="submit" className="btn">Finalizar Compra</button>
                    </>
                :
                    <> 
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Confirmar E-Mail
                        </label>
                        <input type="text" placeholder="Confirmar E-Mail" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInputChange} name="emailConf"></input>
                        <p className="text-red-500 text-xs italic">E-Mail no coincide.</p>
                    </div>
                    <button type="submit" className="btn" disabled>Finalizar Compra</button>
                    </>
                }
            </form>
        </div>
    </>
  )
}

export default CartForm