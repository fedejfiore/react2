import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = (greetings) => {
    const[productos, setProductos] = useState([])
    const {category} = useParams()

    useEffect(()=>{
        if(!category){
            getProducts()
        .then((respuesta)=>{
            setProductos(respuesta)
        })
        .catch((error)=>console.log(error))
        }else {
            getProductsByCategory(category)
                .then((respuesta)=>{
                    setProductos(respuesta)
                })
                .catch((err)=>console.log(err))
        }

    }, [category])

    return (
        <div>
            <h1>{greetings}</h1>
            <ItemList products={productos}/>
        </div>

)

}

export default ItemListContainer