import themeSwitcher, { copyToClipboard } from "./features.js"
import { calculate } from "./calculate.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"

const input = document.getElementById('input')

document.querySelectorAll('.charKey')
.forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', handleButtonPress)
})


document.getElementById('clear').addEventListener('click',handleClearButton)

document.getElementById('equal').addEventListener('click',calculate)

// evento de quando apertar alguma tecla
input.addEventListener('keydown',handleTyping)



document.getElementById('copyToClipboard').addEventListener('click',copyToClipboard)


document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)