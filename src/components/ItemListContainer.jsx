import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const {categoryID} = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState( true )
    
    useEffect(() => {
      categoryID ? getCategory(categoryID) : getItems() //si el hook es por category id solo se trae productos por categoria caso contrario listado completo
    }, [categoryID])
    
    const getCategory = async (id) => {
      const db = getFirestore()
      const itemsCollection = collection(db, 'items')
      const q = query( itemsCollection, where( 'category', '==', id ) )


    
      const snapshot = await getDocs( q )

      if (snapshot.size > 0) {
        const itemsData = snapshot.docs.map( d => ({'id': d.id, ...d.data()}) )
        setProducts(itemsData)
        setLoading( false )
      }
    }
    
    const getItems = () => {
      const db = getFirestore()
      const itemsCollection = collection(db, 'items')
      getDocs( itemsCollection ).then( snapshot => {
        if (snapshot.size > 0) {
          const itemsData = snapshot.docs.map( d => ({'id': d.id, ...d.data()}) )
          setProducts(itemsData)
          setLoading( false ) 
        }
      })
    }


    return( // se pone en estado de carga hasta cumplir la promesa mostrando animacion
        <div>
          {loading ?
            <div className="flex justify-center m-20 h-20">
              <img src="../img/logoAnimado.gif" alt="Animacion Carga" />
            </div>
          :
            <ItemList items={products}/>
          }
        </div>
    )
}
export default ItemListContainer