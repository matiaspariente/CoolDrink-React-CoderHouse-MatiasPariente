import { useContext } from "react"
import { CartContext } from "../context/CartContext";

const ItemDetail = ({item}) => { // funcion que retorna una card con el detalle de un producto

    const { addItem } = useContext(CartContext);

    return (
        <div className="m-20 card-normal border-2 rounded-md w-100 bg-base-100 shadow-xl flex justify-center">
            <figure><img src={item.pictureUrl} alt={item.title} /></figure>
        <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>${item.price}</p>
            <p>{item.detail}</p>
            <button onClick={() => {addItem(item,1)}} className="btn">Agregar a Carrito</button>
        </div>
    </div>
    )   
}  

export default ItemDetail