import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

export const Header = () => {
    const {getCantidadItems}= useCart();
    return (
        <header className="d-flex justify-content-between align-baseline gap-5 p-3 bg-dark text-white">
            <h2><Link className="text-decoration-none text-white" to="/">Perfumeria</Link></h2>
            <Link to="/carrito" className="text-decoration-none text-white"><span>{getCantidadItems() == 0 ? "" : getCantidadItems()}</span> Carrito</Link>
        </header>
    )
}