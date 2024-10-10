import Campo from "../../components/Campo/Campo"
import "./TelaHome.css"
export default function TelaHome() {
    let x;
    return (
        <div className="TelaHomeContainer">
            <div className="TelaHomeBlocoCentral">
                <div className="TelaHomeCampos">
                    <Campo placeholder={"Nome Completo"} value={x} />
                    <Campo placeholder={"E-mail"} value={x} />
                    <Campo placeholder={"Senha"} value={x} />
                    <Campo placeholder={"Confirme a senha"} value={x} />
                </div>
            </div>
        </div>
    )
}