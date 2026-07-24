import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import "./Header.css"
import { IconoCarrito } from "../IconoCarrito/IconoCarrito";
import { Buscador } from "../Buscador/Buscador";

export const Header = () => {
    const {getCantidadItems}= useCart();
    return (
        <header className="d-flex justify-content-between align-baseline gap-5 p-3  text-white bg-blush">
            <h4 className="start-0"><Link className="text-decoration-none link " to="/">Essence</Link></h4>
            <Buscador></Buscador>
            <div className="d-flex gap-1 align-items-center">
            <Link to={'/admin/dashboard'} className="text-decoration-none text-black">ADMIN</Link>
            <Link to="/carrito" className="text-decoration-none link"><IconoCarrito></IconoCarrito></Link>
            </div>
        </header>
    )
}