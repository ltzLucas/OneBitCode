function renderFinance(financeData) {
    const tr = document.createElement('tr');
    tr.id = financeData.id;

    // Criando a primeira célula da tabela
    const td1 = document.createElement('td');
    td1.classList.add('historic-img');

    const imgReceived = document.createElement('img');
    imgReceived.setAttribute('src', 'img/imgTotalReceived.png');
    imgReceived.classList.add('imgHistoricGreen');

    td1.appendChild(imgReceived);

    // Criando a segunda célula da tabela
    const td2 = document.createElement('td');
    td2.classList.add('historic-title');
    td2.id = 'historic-title';
    td2.textContent = financeData.name;

    // Criando a terceira célula da tabela
    const td3 = document.createElement('td');
    td3.classList.add('historic-date');
    td3.id = 'historic-date';
    td3.textContent = financeData.date;

    // Criando a quarta célula da tabela
    const td4 = document.createElement('td');
    td4.textContent = `R$ ${financeData.ammount} `; 
    if(financeData.ammount >= 0){
        td4.id = 'historic-ammount-green';
        td4.classList.add('historic-ammount-green');
    }else{
        td4.id = 'historic-ammount-red';
        td4.classList.add('historic-ammount-red');
    }

    // Criando a quinta célula da tabela
    const td5 = document.createElement('td');
    td5.classList.add('historic-img');

    const imgEdit = document.createElement('img');
    imgEdit.setAttribute('src', 'img/Edit.png');
    imgEdit.classList.add('imgHistoric');

    td5.appendChild(imgEdit);

    // Criando a sexta célula da tabela
    const td6 = document.createElement('td');
    td6.classList.add('historic-img');

    const imgDelete = document.createElement('img');
    imgDelete.setAttribute('src', 'img/Delete.png');
    imgDelete.classList.add('imgHistoric');

    td6.appendChild(imgDelete);

    tr.append(td1, td2, td3, td4, td5, td6);

    document.querySelector('#body-historic').appendChild(tr);
}
function insertValuesInCards(ammounts){
    let totalBalance = 0
    let totalReceived = 0
    let totalSpent = 0
    ammounts.forEach((ammount) =>{
        if(ammount >= 0){
            totalReceived += ammount
        }else{
            totalSpent += ammount
        }
    })

    totalBalance = totalReceived + totalSpent

    const cardsTotalBalance = document.getElementById('cards-total-balance')
    cardsTotalBalance.textContent = totalBalance

    const cardsTotalReceived = document.getElementById('cards-total-received')
    cardsTotalReceived.textContent = totalReceived

    const cardsTotalSpent = document.getElementById('cards-total-spent')
    cardsTotalSpent.textContent = totalSpent
}




async function fetchFinances(){
    const finances = await fetch('http://localhost:3000/transactions').then(res => res.json())
    finances.forEach(renderFinance)
}

async function fetchAmmouts(){
    const finances = await fetch('http://localhost:3000/transactions').then(res => res.json())
    const ammounts = finances.map(finance => finance.ammount);
    insertValuesInCards(ammounts)
}


document.addEventListener('DOMContentLoaded', () =>{
    fetchFinances()
    fetchAmmouts()
})

const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const financeData = {
        name: document.querySelector('#name').value,
        date: document.querySelector('#date').value,
        ammount: parseFloat(document.querySelector('#ammount').value)
    }

    const response = await fetch('http://localhost:3000/transactions',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(financeData)
    })

    const savedFinance = await response.json()

    form.reset()
    renderFinance(savedFinance)
    fetchAmmouts()
})