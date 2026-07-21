import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./CompraExitosa.css"

const ALIAS = "ALIAS.EJEMPLO"; // Reemplazá por tu alias real

export const CompraExitosa = ({ pedidoId, montoTotal ,items = []}) => {
    const [copiado, setCopiado] = useState(false);
  

    const handleCopiarAlias = () => {
        navigator.clipboard.writeText(ALIAS);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
    };

    return (
        <div className="d-flex flex-column align-items-center text-center p-4 bg-light rounded shadow-sm gap-2">
            <div className='container-volver'>
            <Link to={"/"} className='btn-acento btn-volver'>Volver</Link>
            </div>
            <h2 className="text-success">¡Pedido Registrado!</h2>
            {pedidoId && <p className="mb-1">Número de Orden: <strong>#{pedidoId}</strong></p>}

            {items && items.length > 0 && (
                <div className="w-100 my-3 text-start">
                    <h3 className="h5 border-bottom pb-2">Resumen de compra</h3>
                    <div className="d-flex flex-column gap-2">
                        {items.map((item) => (
                            <div 
                                key={item.id || item.nombre} 
                                className="d-flex justify-content-between align-items-center bg-white p-2 rounded border"
                            >
                                <div>
                                    <strong className="d-block">{item.nombre}</strong>
                                    <small className="text-muted">
                                        Cant: {item.qty} x ${Number(item.precio).toLocaleString('es-AR')}
                                    </small>
                                </div>
                                <span className="fw-bold">
                                    ${Number(item.subtotal || item.precio * item.qty).toLocaleString('es-AR')}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <hr className="w-100" />

            <h3>Datos para el Pago</h3>
            <p className="mb-1">Realizá la transferencia correspondiente al Alias:</p>

            <div className="bg-white p-3 border rounded w-100 my-2">
                <h4 className="m-0 ">{ALIAS}</h4>
            </div>

            <button 
                type="button" 
                className={`btn ${copiado ? 'btn-success' : 'btn-outline-secondary'} w-100`}
                onClick={handleCopiarAlias}
            >
                {copiado ? "✓ ¡Alias Copiado!" : "📋 Copiar Alias"}
            </button>

            {montoTotal && (
                <h4 className="mt-3">
                    Total a transferir: <span className="text-success">${Number(montoTotal).toLocaleString('es-AR')}</span>
                </h4>
            )}

            <p className="text-muted small mt-3">
                Si no se abrió WhatsApp automáticamente, recordá enviarnos la captura del comprobante al chat.
            </p>
        </div>
    );
};