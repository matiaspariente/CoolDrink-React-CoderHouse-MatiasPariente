import { useState } from "react";

const ItemCount = ({ onAdd }) => { // componente de cuenta de cantidad de productos, agregar y sustraer cantidad.

    const [count, setCount] = useState(1);

    const countAdd = () => {
        setCount(count + 1);
    };

    const countSubstract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };


    return ( 
        <>
            <div>
                <button onClick={countSubstract} className="btn m-2">-</button>
                <span>{count}</span>
                <button onClick={countAdd} className="btn m-2">+</button>
            </div>
            <button onClick={() =>onAdd(count)} className="btn">Agregar al carrito</button>
    </>
  );
};

export default ItemCount;