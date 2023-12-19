import { calculate } from "./calculate.js"


const input = document.querySelector('#input')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

export function handleButtonPress (ev) {

    const value = ev.currentTarget.dataset.value
    input.value += value 
}

export function handleClearButton(){
    input.value = ''
    input.focus()
}

export function handleTyping(ev){
    ev.preventDefault()
    //ev.key é a tecla que o cara digitou logo vai verificar se a tecla é permitida
    if(allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if(ev.key === 'Enter'){

        calculate()
    }

}