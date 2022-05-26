import { useContext } from "react";
import { CartContext }  from "../context/CartContext";


const CartList = () => { // componente de listado de compra

    const { carts , totalPrice, totalCount, totalPriceUnit, removeItem , clear , addItem, substractOneItem } = useContext(CartContext) // se trae el contexto del carrito

  return (// render del listado de carrito
    <> 
    <table className="table w-full">
                    <thead className="text-center">
                        <th>Title</th><th>Precio</th><th>Cantidad</th><th>Total</th><th>Vaciar</th> 
                    </thead>
                    {carts.map(item => 
                        <tbody>
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
                                <div className="text-center">${item.price}</div>
                            </td>    
                            <td>
                                <div className="text-center">
                                    <button className="btn w-8 mr-2 rounded-full bg-gray-200 text-black" onClick={() => substractOneItem(item)}>-</button> 
                                    {item.quantity}
                                    <button className="btn w-8 ml-2 rounded-full bg-gray-200 text-black" onClick={() => addItem(item,1)}>+</button>
                                </div>
                            </td>
                            <td>
                                <div className="text-center">
                                    ${item.price * item.quantity}
                                </div>
                            </td>
                            <td className="text-center">
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
                            <div className="font-bold text-lg">${totalPriceUnit()}</div>
                        </td>
                        <td>
                            <div className="font-bold text-lg">{totalCount()}</div>
                        </td>
                        <td>
                            <div className="font-bold text-lg">${totalPrice()}</div>
                        </td>
                        <td>
                            <button onClick={() => clear()}>  
                                <img src="../img/trashIcon.png" className="w-12 h-12" alt="trashIcon"/>
                            </button>
                        </td>
                    </tfoot> 
    </table>
    </> 
  )
}

export default CartList