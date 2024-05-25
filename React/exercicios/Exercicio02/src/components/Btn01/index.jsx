import style from './index.module.css'

export default function Btn01({title}){
    return(

        <button className={style.btn}>{title}</button>

    )
}