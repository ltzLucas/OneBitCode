import { useState } from "react"
import  style from "./index.module.css"

export default function GeradorSenhas  (){
    const [password ,setPassword] = useState("")
    const [copyText, setCopyText] = useState("Copiar")

    function generate() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let newPassword = '';
        const charactersLength = characters.length;
        
        for (let i = 0; i < 10; i++) {
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
                <button
                    onClick={generate}
                >Gerar!</button>
                <button
                    onClick={copyToClipboard}
                >{copyText}</button>
                <p>{password}</p>
            </div>
        </>


    )
}