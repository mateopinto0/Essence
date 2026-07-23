import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editarItem, getItemById } from "../../../service/ProductoService";
import { uploadImage } from "../../../service/uploadImage";
import { FormEditarItem } from "./FormEditarItem";

export const FormEditarItemContainer = () => {
    const [product,setProduct] = useState({
        nombre: "",
        descripcion: "",
        marca: "",
        tipo: "",
        precio: 0,
        stock: 0
    })
    const {id} = useParams();
    const [file,setFile]=useState(null)
    const[loading,setLoading] = useState(true);
    const navigate =useNavigate();

    useEffect(()=>{
        const cargarProducto = async() => {
        try{
            const data= await getItemById(id);
            setProduct({
                nombre: data.nombre,
                descripcion: data.descripcion,
                marca: data.marca,
                tipo: data.tipo,
                precio: data.precio,
                stock: data.stock,
                imagenUrl: data.imagenUrl
            })
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }

        
    }; cargarProducto()
    },[id])
    

    const handleChange = (e) =>{
        const{name,value} = e.target;
        setProduct({...product,[name]:value})
    }
        const handleFileChange = (e)=>{
        const file = e.target.files[0] || null;
        setFile(file);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
    try {
           
            let imagenUrl = product.imagenUrl;
            if (file) {
                imagenUrl = await uploadImage(file);
            }

            const productData = {
                ...product,
                precio: Number(product.precio),
                stock: Number(product.stock),
                imagenUrl
            };

            await editarItem(id, productData); 

            navigate(`/admin/editar-item/${id}`, { replace: true });
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    return(
        <FormEditarItem product={product} onChange={handleChange} onSubmit={handleSubmit} onFile={handleFileChange}></FormEditarItem>
    )
}