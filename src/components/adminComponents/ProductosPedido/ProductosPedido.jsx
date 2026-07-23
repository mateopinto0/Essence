export const ProductosPedido = ({items}) => {

    return(
        <>
       <ul className="list-group list-group-flush">
    {items.map((item) => (
        <li 
            className="list-group-item d-flex justify-content-between align-items-center py-3" 
            key={item.id}
        >
           
            <div>
                <h6 className="my-0 fw-bold">{item.nombre}</h6>
                <small className="text-muted">
                    {item.qty} u. x ${item.precio}
                </small>
            </div>
            
    
            <span className="text-muted fw-semibold">
                ${item.subtotal}
            </span>
        </li>
    ))}
</ul>
        </>
    )
}