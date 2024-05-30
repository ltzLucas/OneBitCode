import { useState } from "react"
import PropTypes from "prop-types"
import TextInput from "./TextInput"

NewGameForm.PropTypes = {
    addGame:PropTypes.func
}

export default function NewGameForm( {addGame} ){
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")

    const handleSubmit = (ev) =>{
        ev.preventDefault()
        addGame({title, cover})
        setCover("")
        setTitle("")
    
    }

    return(
        <form onSubmit={handleSubmit}>
            <TextInput id={"title"} label="Titulo" value={title} setValue={setTitle}/>
            <TextInput id={"cover"} label="Cover" value={cover} setValue={setCover}/>
            <button type="submit">Adicionar à biblioteca</button>
      </form>
    )
}