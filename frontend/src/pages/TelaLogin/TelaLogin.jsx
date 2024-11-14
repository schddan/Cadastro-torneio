// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [formulario, setFormulario] = useState(
        { email: "", senha: ""}
    )
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => setFormulario(
        {...formulario, [e.target.name]: e.target.value} )

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:3000/login", formulario)
            navigate("/home")

        }catch(err){
            setError(err.response.data||"Erro ao fazer login")
        }
    }

    return (
        <div className="login-container">
            <h2>Login no FIFA Campeonato</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="E-mail" onChange={handleChange} required />
                <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
                {error && <p className='error'>{error}</p>}
                <button type="submit">Acessar</button>
            </form>
            <p>
                Não possui cadastro? <Link to="/cadastro">Cadastre-se</Link>
            </p>
        </div>
    );
}

export default Login;