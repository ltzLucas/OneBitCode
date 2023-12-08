function criarForms() {
    const time = document.getElementById('forms')

    const forms = document.createElement('form')
    const ul = document.createElement('ul')

    const h3 = document.createElement('h3')
    h3.innerText = 'Digite as informações do jogador'
    ul.appendChild(h3)


    const liPosicao = document.createElement('li')
    liPosicao.innerText = "Posição: "
    const inputPosicao = document.createElement('input')
    inputPosicao.type = 'text'
    inputPosicao.id = 'posicao'
    liPosicao.appendChild(inputPosicao)
    ul.appendChild(liPosicao)
    ul.appendChild(document.createElement('br'))


    const liNome = document.createElement('li')
    liNome.innerText = "Nome: "
    const inputNome = document.createElement('input')
    inputNome.type = 'text'
    inputNome.id = 'nome'
    liNome.appendChild(inputNome)
    ul.appendChild(liNome)
    ul.appendChild(document.createElement('br'))

    const liNumero = document.createElement('li')
    liNumero.innerText = "Numero: "
    const inputNumero = document.createElement('input')
    inputNumero.type = 'number'
    inputNumero.id = 'numero'
    liNumero.appendChild(inputNumero)
    ul.appendChild(liNumero)
    ul.appendChild(document.createElement('br'))

    const btnSalvar = document.createElement('button')
    btnSalvar.onclick = validar;
    btnSalvar.innerText = 'SALVAR'

    forms.appendChild(ul)
    time.appendChild(forms)
    time.appendChild(btnSalvar)

}

function validar() {
    const response = confirm('Deseja confirmar essa escalação?')
    

    if (response == true) {
        addEscalacao()
    }
    removeForms()
}

function addEscalacao(){
    const posicao = document.getElementById('posicao').value
    const nome = document.getElementById('nome').value
    const numero = document.getElementById('numero').value

    const galleryEscalacao = document.getElementById('gallery__escalacao')

    const liJogador = document.createElement('li')
    
    const pNome = document.createElement('p')
    pNome.innerText = "Nome: " + nome
    liJogador.appendChild(pNome)

    const pPosicao = document.createElement('p')
    pPosicao.innerText = "Posicao: " + posicao
    liJogador.appendChild(pPosicao)

    const pNumero = document.createElement('p')
    pNumero.innerText = "Numero: " + numero
    liJogador.appendChild(pNumero)

    galleryEscalacao.appendChild(liJogador)

        
}

function removeForms() {
    const section = document.getElementById('forms')

    const form = document.getElementsByTagName('form')[0]
    const button = document.getElementsByTagName('button')[0]
    
    section.removeChild(form)
    section.removeChild(button)

}

function remover(){
    const gallery__escalacao = document.getElementById('gallery__escalacao')

    const numeroCamisa = prompt("Insira o numero da camisa do jogador")

    const liJogadores = document.getElementsByTagName('li')


    for(let i = 0; i < liJogadores.length;i++) {
        const liJogador = liJogadores[i];


        const pElementos = liJogador.getElementsByTagName('p')

        if(pElementos[2].innerText.includes(numeroCamisa)){
            
            if(validadeResponse()){
                gallery__escalacao.removeChild(liJogador)
            }
        }

    }
    
}

function validadeResponse() {
    return  confirm('Deseja realmente excluir do seu time')

}