import React from 'react'
import Item from "./Item";

const ItemList = ({items}) => {// componente que mapea el listado de productos recibido como parametro
  return (
    <div className="p-10 m-10 grid grid-cols-2 md:grid-cols-4">
      {items.map( item => <Item key={item.id} item={item}/> )}
    </div>
  )
}

export default ItemList