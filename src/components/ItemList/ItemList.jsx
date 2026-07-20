import { Link } from "react-router-dom"
import { BotonCarrito } from "../BotonCarrito/BotonCarrito"
import { Item } from "../Item/Item"

export const ItemList = ({items}) => {

return (
    <>
    <h1 className="text-center">Lista de Productos</h1>
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
        {items.map((item) =><Item key={item.id} {...item}><Link to={`/detalle/${item.id}`} className="btn-acento">Ver más</Link><BotonCarrito product={item}></BotonCarrito></Item>)}
    </div>
    </>
)

}