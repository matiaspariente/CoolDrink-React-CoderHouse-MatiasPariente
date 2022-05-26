import React from 'react'
import { useState , useEffect, useContext} from "react";
import { CartContext }  from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const CartForm = () => { // componente de formulario de carrito de compra

    const { carts , totalPrice, clear } = useContext(CartContext) // se trae el contexto del carrito

    const [loading, setLoading] = useState( true ) // state para animacion de loading
    const [mailConf, setMailConf] = useState(false);// state de email confirmado
    const [datos, setDatos] = useState({ // state de datos del formulario
        nombre: '',
        apellido: '',
        telefono:'',
        email:'',
        emailConf:''
    })

    const MySwal = withReactContent(Swal) // sweet alert inicializacion

    useEffect(()=> { //hook de verificacion de formulario para confirmacion de email
        if (datos.email === datos.emailConf && datos.email !== ''){ // condicion de confirmacion de Email
            setMailConf(true)
        }else{
            setMailConf(false)
        }   
      }, [datos])

    const handleInputChange = (event) => { // handle de inputs de formulario
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => { // procesamiento de datos de formulario y compra para el envio a Firebase
        event.preventDefault()
        const user = {
            name: datos.nombre,
            last_name: datos.apellido,
            phone: datos.telefono,
            email: datos.email,

        }
        const products = []
        carts.map( item => products.push({
            title:item.title,
            price:item.price,
            quantity:item.quantity,
            totalpriceitem:item.price*item.quantity
        }))
        const checkout = {
            buyer: user,
            items: products,
            total: totalPrice()
          }
          saveToFirestore( checkout )
        }

        const saveToFirestore = async (checkout) => { // envio de datos de compra a firebase
            const db = getFirestore()
            setLoading(false)
            const { id } = await addDoc(collection(db, 'checkouts'), checkout) // guardo el ID de la compra
            setLoading(true)
            clear()
            await MySwal.fire({ // alerta de compra finalizada
                title: <strong>Compra Finalizada</strong>,
                html: <i>ID de compra {id}</i>,
                icon: 'success',
                confirmButtonText:'Ir a Inicio'
              })
               
          }

  return ( // render del formulario de compra con condicion de carga (loading) al enviar a firebase y condicion de confirmacion de email
    <>  
        <div className="flex flex-column justify-center items-center mt-10">
            {loading ?
                <>
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
                </>    
            :
            <>
                <div className="flex justify-center m-20 h-20">
                    <img src="../img/logoAnimado.gif" alt="Animacion Carga" />
                </div>
            </> 
            }  
        </div>
    </>
  )
}

export default CartForm