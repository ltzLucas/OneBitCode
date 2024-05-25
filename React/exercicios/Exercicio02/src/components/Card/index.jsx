import style from './index.module.css'
import Btn01 from '../Btn01/index'


export default function Card(props){

    return (
        <div className={style.container}>
            <img src={props.posterImg} alt={style.poster}  className={style.poster}/>
            <div>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corporis aspernatur quae illum doloremque alias ut eaque temporibus ratione. Unde culpa deleniti suscipit nesciunt corporis saepe quis quos magnam consectetur vel neque cupiditate, mollitia ducimus eos? Voluptatum rerum, provident possimus non a magni nulla, eveniet consequuntur ducimus ullam laudantium sit animi repellendus .</p>
                <Btn01 title="Comprar agora"/>
            </div>
        </div>
    )
}