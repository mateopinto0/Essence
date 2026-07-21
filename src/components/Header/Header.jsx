import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import "./Header.css"
import { IconoCarrito } from "../IconoCarrito/IconoCarrito";
import { Buscador } from "../Buscador/Buscador";

export const Header = () => {
    const {getCantidadItems}= useCart();
    return (
        <header className="d-flex justify-content-between align-baseline gap-5 p-3  text-white">
            <h2><Link className="text-decoration-none link " to="/">Perfumeria</Link></h2>
            <Buscador></Buscador>
            <Link to="/carrito" className="text-decoration-none link"><IconoCarrito></IconoCarrito></Link>
        </header>
    )
}