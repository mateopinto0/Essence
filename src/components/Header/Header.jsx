import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="d-flex justify-content-between align-baseline gap-5 p-3 bg-dark text-white">
            <h2><Link className="text-decoration-none text-white" to="/">Perfumeria</Link></h2>
            <Link to="/carrito">Carrito</Link>
        </header>
    )
}