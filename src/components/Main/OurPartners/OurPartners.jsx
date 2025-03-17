import stylesGeneral from '../styleCss.module.css'
import style from './style.module.css'
import minGos from "../../../assets/img/Group39877.svg"
import digRus from "../../../assets/img/Group39876.svg"
import rectangle from "../../../assets/img/Rectangle39589.png"
import variablesText from './variablesText'


const varT = variablesText
const lstImgPartners = [minGos, digRus, false, false, false]

export default function OurPartners(){
    return (
        <div className={`${stylesGeneral.container} ${style.container}`}>
            <span className={`${stylesGeneral['grey-text']} ${style.anchor}`}>{varT.anchor}</span>
            <hr className={`${stylesGeneral.line} ${style.line}`}/>
            <div className={style['div-our-part']}>
                {lstImgPartners.map((url,indx)=>{
                    return(
                    <div  key={indx} className={style['container-our-part']}>
                        <img src={rectangle} className={style["big-image"]} />
                        {url&&<img src={url} className={style["small-image"]} />}
                    </div>)
                })}
                </div>
        </div>
    )
}
