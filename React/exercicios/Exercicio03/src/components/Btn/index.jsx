import style from "./index.module.css"

export default function Btn({title}){
    return <button className={style.btn} >{title}</button>
}