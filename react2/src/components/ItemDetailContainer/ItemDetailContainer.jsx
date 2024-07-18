import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProductos] = useState()
    const {id} = useParams()
    useEffect(()=>{
        getProductById(id)
        .then((respuesta)=>{
            setProductos(respuesta)
        })
        .catch((error)=>{
            console.log(error)})
    }, [id])
    return (
        <div>
            
        </div>
    )
}

export default ItemDetailContainer