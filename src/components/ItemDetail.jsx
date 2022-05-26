import { useContext, useState} from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => { // componente que retorna una card con el detalle de un producto

    const [countToAdd,setCountToAdd] = useState(0)

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (count) => { 
        setCountToAdd(count);
        addItem(item,count);
    }

    return ( //render de detalle de producto con condicional por cantidad seleccionada
        <div className="m-20 card-normal border-2 rounded-md w-100 bg-base-100 shadow-xl flex justify-center">
            <figure><img src={item.pictureUrl} alt={item.title} /></figure>
        <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>${item.price}</p>
            <p>{item.detail}</p>
            {countToAdd === 0 ? (
                <ItemCount onAdd={handleOnAdd}/>
            ) : (
                <Link to="/cart">
                    <button className="btn">Ir al carrito</button>
                </Link>
            )}
        </div>
    </div>
    )   
}  

export default ItemDetail