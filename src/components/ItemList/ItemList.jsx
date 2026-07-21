import { Link } from "react-router-dom"
import { BotonCarrito } from "../BotonCarrito/BotonCarrito"
import { Item } from "../Item/Item"
import "./ItemList.css"

export const ItemList = ({items}) => {

return (
    <div className="itemlist">
    <h1 className="text-center">Lista de Productos</h1>
    <div className="d-flex flex-wrap justify-content-around align-items-center lista">
        {items.map((item) =><Item key={item.id} {...item}><Link to={`/detalle/${item.id}`} className="btn-acento">Ver más</Link><BotonCarrito product={item} maxStock={item.stock}></BotonCarrito></Item>)}
    </div>
    </div>
)

}