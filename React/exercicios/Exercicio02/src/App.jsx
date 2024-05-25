import Card from "./components/Card";
import posterImg1 from "./assets/imgCard.jpg"
import posterImg2 from "./assets/esb-poster.jpg"
import posterImg3 from "./assets/rotj-poster.jpg"
import Btn01 from "./components/Btn01";

export default function App(){
  return (
    <>
      <Btn01 title="Teste"/>
      <Card title="Pôster: Star Wars (1997)" posterImg={posterImg1}/>
      <Card title="Pôster: Empire Stikes Back (1980)" posterImg={posterImg2}/>
      <Card title="Pôster: Return of The Jedi (1983)" posterImg={posterImg3}/>
    </>


  )


}