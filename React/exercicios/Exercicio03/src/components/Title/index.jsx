
import style from "./index.module.css"

export default function Title({title}){
    return <h2 className={style.title}>{title}</h2>
}