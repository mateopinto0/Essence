import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import "./Header.css"

export const Header = () => {
    const {getCantidadItems}= useCart();
    return (
        <header className="d-flex justify-content-between align-baseline gap-5 p-3  text-white">
            <h2><Link className="text-decoration-none link " to="/">Perfumeria</Link></h2>
            <Link to="/carrito" className="text-decoration-none link"><span>{getCantidadItems() == 0 ? "" : getCantidadItems()}</span> Carrito</Link>
        </header>
    )
}