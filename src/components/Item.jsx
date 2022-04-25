const Item = ({item}) => {
    return (
    <div className="card-normal border-2 rounded-md w-100 bg-base-100 shadow-xl">
        <figure><img src={item.pictureUrl} alt={item.title} /></figure>
        <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>${item.price}</p>
        </div>
    </div>
    )
  }
  
export default Item