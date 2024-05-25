import style from './index.module.css'
import posterImg from "../../assets/imgCard.jpg"
import Btn01 from '../Btn01/index'

export default function Card(){

    return (
        <div className={style.container}>
            <img src={posterImg} alt="Star Wars Poster"  className={style.poster}/>
            <div>
                <h2>Poster do Filme Stars Wars</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corporis aspernatur quae illum doloremque alias ut eaque temporibus ratione. Unde culpa deleniti suscipit nesciunt corporis saepe quis quos magnam consectetur vel neque cupiditate, mollitia ducimus eos? Voluptatum rerum, provident possimus non a magni nulla, eveniet consequuntur ducimus ullam laudantium sit animi repellendus .</p>
                <Btn01 />
            </div>
        </div>
    )
}