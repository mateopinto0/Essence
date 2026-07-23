import { useState } from "react"
import { addProducto } from "../../../service/ProductoService";
import { replace, useNavigate } from "react-router-dom";
import { FormProducto } from "./FormProducto";
import { uploadImage } from "../../../service/uploadImage";

export const FormProductoContainer = () => {
    const [product,setProduct] = useState({
        nombre: "",
        descripcion: "",
        marca: "",
        tipo: "",
        precio: 0,
        stock: 0
    })
    const [file,setFile]=useState(null)
    const[loading,setLoading] = useState(true);
    const navigate =useNavigate();

    const handleChange = (e) =>{
        const{name,value} = e.target;
        setProduct({...product,[name]:value})
    }
        const handleFileChange = (e)=>{
        const file = e.target.files[0] || null;
        setFile(file);
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{
            const imagenUrl =await uploadImage(file)
            const productData = {
                ...product,
                precio: Number(product.precio),
                stock: Number(product.stock),
                imagenUrl: imagenUrl
            }

            const id= await addProducto(productData);

            setProduct({nombre:"",descripcion:"",marca:"",tipo:"",precio:0,stock:0})
            setFile(null)
            navigate('/admin/dashboard',{replace:true});
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false);
        }

    }

    return(
        <FormProducto product={product} onChange={handleChange} onFile={handleFileChange} onSubmit={handleSubmit}></FormProducto>
    )
}