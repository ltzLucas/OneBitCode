import { useState } from "react"
import imgUser from "../../assets/imgUser.jpeg"
import Btn from "../Btn"
import Description from "../Description"
import Title from "../Title"
import style from "./index.module.css"

export default function Card(props){

    const [followText, setFollowText] = useState("Follow")


    function handleClick(ev){
        alert("Agora vc está seguindo")
        setFollowText("Following")
    }

    return (
        <div className={style.content}>

            <img style={{height:"150px" ,borderRadius:"50px"}} src={imgUser} alt={imgUser} />
            <Title title="Lucas Lima">
                <button
                    className={style.followBtn}
                    onClick={handleClick}
                >
                    {followText}
                </button>
            </Title>
            <hr />
            <Description description="Full-stack JavaScript Developer" />
            <hr />
            <Description description="+55 (41) 9 9111-0168" />
            <hr />
            <Description description="ltzlucaslima@hotmail.com" />
            <hr />
            <Btn title="GitHub" />
            <br />
            <Btn title="Linkedin" />
            <br />
            <Btn title="Twitter"/>
        </div>

    )

}