import React from 'react'
import Item from "./Item";

const ItemList = ({items}) => {
  return (
    <div className="p-10 grid grid-cols-2 md:grid-cols-5">
      {items.map( item => <Item key={item.id} item={item}/> )}
    </div>
  )
}

export default ItemList