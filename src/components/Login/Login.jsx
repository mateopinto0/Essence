import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css"

export const Login = () => {
   
     const { login } = useAuth();

    const [email,setEmail] = useState("");
    const [ password,setPassword] = useState("");
    const [error,setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
       await login(email,password);
        navigate("/admin/dashboard") 
        }catch(error){
            console.log(error)
            setError("Correo y/o contraseña incorrecto")
        }
    }
   
    return (
        <div className="container vh-100 login-container">

            <div className="d-flex flex-column  align-items-center justify-content-center  login">
            <h2 className="mt-4">Iniciar sesion</h2>

            <form onSubmit={handleSubmit} className="d-flex p-4 justify-content-center align-items-center flex-column gap-3">

                <div className="input-group gap-2">
                <label>E-mail</label>
                <input className="w-100 login-input" type="email" name="email" id="email" placeholder="Ingrese su correo eletronico" onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <div className="input-group gap-2">
                <label>Contraseña</label>
                <input className="w-100 login-input" type="password" name="password" placeholder="Ingrese su contraseña" id="password" onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                {error && <p className="errorMessage">Correo y/o contraseña incorrecto</p>}
                <button type="submit" className="btn-acento">Iniciar sesion</button>
            </form>
            </div>
        </div>
    )
}