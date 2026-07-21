
import { useSearch } from "../../context/SearchContext";
import "./Buscador.css";

export const Buscador = () => {
    const { busqueda, setBusqueda } = useSearch();

    return (
        <div className="buscador">
            <i className="bi bi-search buscador-icono"></i>
            <input
                type="text"
                className="buscador-input"
                placeholder="Buscar por nombre, marca o tipo..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
            {busqueda && (
                <button type="button" className="buscador-limpiar" onClick={() => setBusqueda("")}>
                    <i className="bi bi-x"></i>
                </button>
            )}
        </div>
    );
};