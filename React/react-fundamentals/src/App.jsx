function sum(a , b){
  return a + b
}


export default function App(){
const tech = "React"


  return (
    <div>
      <h1>{tech} is awesome!</h1>
      <h3> Usando função:  {sum(1, 3)}</h3>
    </div>
  )
}