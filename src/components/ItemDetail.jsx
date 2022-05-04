const ItemDetail = ({item}) => { // funcion que retorna una card con el detalle de un producto
        return (
            <div className="m-20 card-normal border-2 rounded-md w-100 bg-base-100 shadow-xl flex justify-center">
                <figure><img src={item.pictureUrl} alt={item.title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>${item.price}</p>
                <p>{item.detail}</p>
            </div>
        </div>
        )   
}  

export default ItemDetail