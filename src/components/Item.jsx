import { Link } from "react-router-dom"

const Item = ({item}) => { // compoente que renderea una card con un producto, imagen, precio y titulo, la imagen esta linkeada al detalle de dicho producto
    return (
    <div className="m-10 card-normal border-2 rounded-md w-100 bg-base-100 shadow-xl">
        <figure>
            <Link to={`/item/${item.id}`}>
                <img src={item.pictureUrl} alt={item.title} />
            </Link>
        </figure>
        <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>${item.price}</p>
        </div>
    </div>
    )
  }
  
export default Item