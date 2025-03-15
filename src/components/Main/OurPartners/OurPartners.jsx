import stylesGeneral from '../styleCss.module.css'
import style from './style.module.css'
import minGos from "../../../assets/img/Group39877.svg"
import digRus from "../../../assets/img/Group39876.svg"
import variablesText from './variablesText'


const varT = variablesText
const lstImgPartners = [minGos, digRus, false, false, false]

export default function OurPartners(){
    return (
        <div className={`${stylesGeneral.container} ${style.container}`}>
            <span className={`${stylesGeneral['grey-text']} ${style.anchor}`}>{varT.anchor}</span>
            <hr className={`${stylesGeneral.line} ${style.line}`}/>
            <div className={style['container-our-part']}>
                {lstImgPartners.map((url,indx)=>{
                    return(
                    <div className={style['div-our-part']} key={indx}>
                        {url&&<img src={url}/>}
                    </div>)
                })}
                </div>
        </div>
    )
}
