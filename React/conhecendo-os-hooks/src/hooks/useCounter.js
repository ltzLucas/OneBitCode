import { useState } from 'react'


function getInititalValue(){
    console.log("obtendo o valor inicial")
    return 1 + 1
}

export default function userCounter(){
    const [count, setCount] = useState(() => getInititalValue())

    const increment = () =>{
        setCount(count + 1)
    }

    return {count, increment}
}