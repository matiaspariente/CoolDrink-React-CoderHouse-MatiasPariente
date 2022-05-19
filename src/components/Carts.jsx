import { useContext, useEffect, useState} from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"


const Carts = () => {

    const { carts , totalPrice, totalCount, totalPriceUnit, removeItem , clear , addItem, substractOneItem } = useContext(CartContext)
    const [loading, setLoading] = useState( true )

    useEffect(() => { //hook de loading
        setTimeout(()=>{  
                setLoading( false )
        },3000)
        }, [])

    return (

        <div>
          {loading ? // animacion de carga
            <div className="flex justify-center m-20 h-20">
              <img src="../img/logoAnimado.gif" alt="Animacion Carga" />
            </div>
          :
            <div className="overflow-x-auto w-full p-20">
                <div className="font-bold text-6xl text-center mb-20">
                    <h1>CARRITO</h1>
                </div>

                {carts.length > 0 ? ( // si hay productos en carrito los muestro con la tabla correspondiente

                <table className="table w-full">
                    <thead className="text-center">
                        <th>Title</th><th>Precio</th><th>Cantidad</th><th>Total</th><th>Vaciar</th> 
                    </thead>
                    {carts.map(item => 
                        <tbody className="text-center">
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.pictureUrl} alt={item.pictureUrl} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.title}</div>
                                        <div className="text-sm opacity-50 ">{item.category}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>$ {item.price}</div>
                            </td>    
                            <td>
                                <div>
                                    <button className="btn w-8 mr-2 rounded-full bg-gray-200 text-black" onClick={() => substractOneItem(item)}>-</button> 
                                    {item.quantity}
                                    <button className="btn w-8 ml-2 rounded-full bg-gray-200 text-black" onClick={() => addItem(item,1)}>+</button>
                                </div>
                            </td>
                            <td>
                                <div>$ {item.price * item.quantity}</div>
                            </td>
                            <td>
                                <button onClick={() => removeItem(item.id)}>  
                                    <img src="../img/trashIcon.png" className="w-8 h-8" alt="trashIcon"/>
                                </button>
                            </td>
                        </tbody>
                    )}
                    <tfoot className="text-center font-bold text-lg">
                        <td>
                            <div className="font-bold text-lg">TOTAL CARRITO</div>
                        </td>
                        <td>
                            <div className="font-bold text-lg">$ {totalPriceUnit()}</div>
                        </td>
                        <td>
                            <div className="font-bold text-lg">{totalCount()}</div>
                        </td>
                        <td>
                            <div className="font-bold text-lg">$ {totalPrice()}</div>
                        </td>
                        <td>
                            <button onClick={() => clear()}>  
                                <img src="../img/trashIcon.png" className="w-12 h-12" alt="trashIcon"/>
                            </button>
                        </td>
                    </tfoot> 
                </table>
                )
                :
                (   
                    <>
                    <table className="table overflow-x-auto w-full p-20">
                        <thead>
                            <th className="text-lg">carrito vacio</th> 
                        </thead>
                    </table>
                    <Link to="/">
                        <button className="btn mt-10">Ir al Inicio</button>
                    </Link>
                    </>        
                )}
            </div>
        }
        </div>      
    )
}

export default Carts