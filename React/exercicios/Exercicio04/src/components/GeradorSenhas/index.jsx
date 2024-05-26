import { useState } from "react"
import  style from "./index.module.css"
import Input from "../Input";

export default function GeradorSenhas  (){
    const [password ,setPassword] = useState("")
    const [copyText, setCopyText] = useState("Copiar")
    const [passwordSize, setPasswordSize] = useState(12)


    function generate() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let newPassword = '';
        const charactersLength = characters.length;
        
        for (let i = 0; i < passwordSize; i++) {
            newPassword += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        setCopyText("Copiar")
        setPassword(newPassword)
    }
  
    function copyToClipboard(){
        window.navigator.clipboard.writeText(password)
        setCopyText("Copiado!")
    }


    return(
        <>
            <div className={style.content}>
                <h1>Gerador de Senhas</h1>

                <div>
                    <label htmlFor="passwordSize">Tamanho: </label>
                    <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>

                </div>
                <button
                    onClick={generate}
                >Gerar senha de {passwordSize} caracteres!</button>
                <button
                    onClick={copyToClipboard}
                >{copyText}</button>
                <p>{password}</p>
            </div>
        </>


    )
}