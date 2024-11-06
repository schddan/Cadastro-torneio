const express = require("express")
const app = express()
const port = 8000
const bcrypt = require("bcrypt")
const pool = require("./db")

app.use(express.json())

app.post("./register", async (req, res) => {
    const {usuario, email, senha } = req.body

    try{
        const emailExiste = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email])
        if(emailExiste.rows.length > 0) {
            return res.status(400).send("Email já cadastrado")
        }
        const senhaCriptografada = await bcrypt.hash(senha, 10)
        
        await pool.query(
            "INSERT INTO usuarios(nome, email, senha) VALUES ($1, $2, $3)", [usuario, email, senhaCriptografada]
        )

        res.status(201).send("Usuário criado com sucesso")

    } catch (erro){
        console.error(erro.message)
        res.status(500).send("Erro no servidor")
    }
})
app.get("/", (req, res) => {
    res.send("Campeonato de Fifa")
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})