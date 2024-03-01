const dayjs = require('dayjs');

function birthday(date){
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1,'year')
    const daysToNextBIrthday = nextBirthday.diff(today,'day') + 1

    console.log(`Idade: ${ageInYears}`)
    console.log(`Proximo aniversário: ${nextBirthday}`)
    
    console.log(`Proximo aniversário: ${nextBirthday.format('DD/MMM/YY')}`)

    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBIrthday}`)


    
}

birthday('2002-09-02')