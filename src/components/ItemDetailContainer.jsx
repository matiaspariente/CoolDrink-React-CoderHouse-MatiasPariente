import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where, documentId } from "firebase/firestore"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const { productID } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState( true )
    const [exist, setExist] = useState(true)
  
    useEffect(() => {
      setExist(true)
      getProductDetail(productID) //si el hook es por category id solo se trae productos por categoria caso contrario listado completo
    }, [productID])
    
    const getProductDetail = async (id) => {
      const db = getFirestore()
      const itemsCollection = collection(db, 'items')
      const q = query( itemsCollection, where( documentId(), '==', id ) )
      
      const snapshot = await getDocs( q )

      if (snapshot.size > 0) {
        const itemsData = snapshot.docs.map( d => ({'id': d.id, ...d.data()}) )
        setProducts(itemsData[0])
        setLoading( false )
      }
      else{
        setLoading( false )
        setExist(false)
      }
  }

    return( // se pone en estado de carga hasta cumplir la promesa mostrando animacion
        <div>
          {loading ?
            <div className="flex justify-center m-20 h-20">
              <img src="../img/logoAnimado.gif" alt="Animacion Carga" />
            </div>
          : 
          <div>
              {exist ?
                <div className="grid grid-cols-2 w-100"> 
                  <ItemDetail item={products}/>
                </div>  
              :
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Error! Producto Inexistente.</span>
                </div>
              </div>   
              } 
          </div>  
          }  
        </div>
        
    )
}
export default ItemDetailContainer