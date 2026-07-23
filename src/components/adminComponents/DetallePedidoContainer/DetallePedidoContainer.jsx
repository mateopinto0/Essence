import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getPedidoById } from "../../../service/PedidoService";
import { DetallePedido } from "../DetallePedido/DetallePedido";
import { Spinner } from "../../Spinner/Spinner";

export const DetallePedidoContainer = () => {
    const {id} = useParams();
    const [pedido,setPedido]= useState({
        estado: "",
        comprador: {
            nombre: "",
            direccion: "",
            telefono: ""
        },
        items: [],
        fechaCreacion: "",
        montoTotal: 0
    })
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        const cargarPedido = async () =>{

            try{

                setLoading(true)
            const data =await getPedidoById(id);
            if (data && data.comprador) {
                    setPedido({
                        estado: data.estado,
                        comprador: {
                            nombre: data.comprador.nombre,
                            direccion: data.comprador.direccion,
                            telefono: data.comprador.telefono
                        },
                        fechaCreacion: data.fechaCreacion ? data.fechaCreacion.toDate().toLocaleString() : "",
                        montoTotal: data.montoTotal,
                        items: data.items
                    });
                } else {
                    console.warn("No se encontró el comprador o el pedido está vacío.");
                }
            }catch(err){
                console.log(err)
            }finally{
                setLoading(false)
            }
        }; cargarPedido()
    },[id])

    if(loading){
        return <Spinner fullPage></Spinner>
    }

    return(
        <div className="container vh-100">
            
        <DetallePedido pedido={pedido} id={id}></DetallePedido>
     </div>
    )
}