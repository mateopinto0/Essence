import { useEffect, useState } from "react"
import { cambiarEstadoPedido, eliminarPedido, getPedidos } from "../../../service/PedidoService";
import { Spinner } from "../../Spinner/Spinner";
import { TablaPedidos } from "../TablaPedidos/TablaPedidos";

export const TablaPedidosContainer = () => {
    const[pedidos,setPedidos]=useState([]);
    const[loading,setLoading]=useState(true);
     const [busqueda,setBusqueda] = useState("");

    useEffect(()=>{
        setLoading(true)
        getPedidos().then((data)=> setPedidos(data)).then(setLoading(false)).catch((err)=> console.log(err))
    },[])

    const pedidosFiltrados= pedidos.filter(pedido => pedido.estado.toLowerCase().includes(busqueda.toLowerCase()))

    const handleRemovePedido = async(id) => {

        const confirmar = window.confirm("¿Estas seguro que quieres eliminar el pedido?")
        if(!confirmar)return;
        await eliminarPedido(id);

        setPedidos((prev)=>prev.filter(pedido => pedido.id != id))
    }

    const handleCambiarEstado = async(id,nuevoEstado) => {
        try{
            await cambiarEstadoPedido(id,nuevoEstado);
           setPedidos(pedidosAnteriores => 
                pedidosAnteriores.map(pedido => 
                    pedido.id === id
                        ? { ...pedido, estado: nuevoEstado } 
                        : pedido
                ))
        }catch(err){
            console.log(err)
        }
    }
    if(loading){
        return <Spinner fullPage></Spinner>
    }

    return(
        <div className="mt-3 mb-5">
        <h4 className="text-center">Lista de pedidos</h4>
        <TablaPedidos setBusqueda={setBusqueda} handleRemovePedido={handleRemovePedido} busqueda={busqueda} pedidos={pedidosFiltrados} onCambiarEstado={handleCambiarEstado}></TablaPedidos>
        </div>
    )
}