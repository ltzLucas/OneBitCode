
import style from "./index.module.css"

export default function Title(props){
    return (
        <h2 className={style.title}>
            {props.title}
            {props.children}
        </h2>
    )
}