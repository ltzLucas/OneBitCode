import style from "./index.module.css"

export default function Description({description}){

    return (
        <p className={style.description}>{description}</p>
    )

}