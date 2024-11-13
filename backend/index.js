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

app.post("./participar_campeonato", async (req, res) => {
    const {idUsuario} = req.body;
    try{
        await pool.query(
            'UPDATE usuarios SET campeonatos_participados = campeonatos_participados + 1 WHERE id = $1', [idUsuario]
        )
        res.status(200).send("Participação registrada")
    }catch(err){
        console.error(err.message)
        res.status(500).send("Erro de servidor")
    }
})

app.get('./campeonatos_participados/:id', async (req, res) => {
    const {idUsuario} = req.params.id
    
    try{
        const resultado = await pool.query("SELECT campeonatos_participados FROM usuarios WHERE id =  $1", {idUsuario})

        if(resultado.rows.length === 0 ){
            return res.status(404).send("Usuário não encontrado")
        }

        res.json({totalCampeonatos: resultado.rows[0].campeonatos_participados})
    }catch(err){
        console.error(err.message)
        res.status(500).send("Erro de servidor")
    }
})

app.post("/login", async (req, res) => {
    const {email,senha} = req.body
    try{
        const resultado = await pool.query(
            "SELECT * FROM usuarios WHERE email = $1", {email}
        )
        const usuario = resultado.rows[0]
        if(!usuario){
            return res.status(400).send("Usuário não encontrado")
        }

        const verificaSenha = await bcrypt.compare(senha, usuario.senha)

        if(!verificaSenha){
            return res.status(400).send("Senha incorreta")

        }

        res.send("Login efetuado")
    }catch(err){
        console.error(err.message)
        res.status(500).send("Erro de servidor")
    }
})

app.get("/", (req, res) => {
    res.send("Campeonato de Fifa")
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})