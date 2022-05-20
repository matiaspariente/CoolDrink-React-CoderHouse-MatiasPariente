import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where, documentId } from "firebase/firestore"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const { productID } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState( true )
  
    useEffect(() => {
      getProductDetail(productID) //si el hook es por category id solo se trae productos por categoria caso contrario listado completo
    }, [productID])
    
    const getProductDetail = async (id) => {
      const db = getFirestore()
      const itemsCollection = collection(db, 'items')
      const q = query( itemsCollection, where( documentId(), '==', id ) )
      
      const snapshot = await getDocs( q )
      console.log(snapshot)

      if (snapshot.size > 0) {
        const itemsData = snapshot.docs.map( d => ({'id': d.id, ...d.data()}) )
        setProducts(itemsData[0])
        setLoading( false )
      }
  }

    return( // se pone en estado de carga hasta cumplir la promesa mostrando animacion
        <div>
          {loading ?
            <div className="flex justify-center m-20 h-20">
              <img src="../img/logoAnimado.gif" alt="Animacion Carga" />
            </div>
          : 
            <div className="grid grid-cols-2 w-100">
              {products ? <ItemDetail item={products}/>
              :
              <></>
              } 
            </div>  
          }  
        </div>
        
    )
}
export default ItemDetailContainer