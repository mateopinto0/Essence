import { useEffect, useState } from "react"
import { getPedidos } from "../../../service/PedidoService";
import { Spinner } from "../../Spinner/Spinner";
import { TablaPedidos } from "../TablaPedidos/TablaPedidos";

export const TablaPedidosContainer = () => {
    const[pedidos,setPedidos]=useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        getPedidos().then((data)=> setPedidos(data)).then(setLoading(false)).catch((err)=> console.log(err))
    },[])

    if(loading){
        return <Spinner></Spinner>
    }

    return(
        <div className="m-5">
        <h3 className="text-center">Lista de pedidos</h3>
        <TablaPedidos pedidos={pedidos}></TablaPedidos>
        </div>
    )
}