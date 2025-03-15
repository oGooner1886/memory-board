import styles from './styles.module.css'
import variablesText from './variablesText.js'
import stylesGeneral from '../styleCss.module.css'


const varT = variablesText

export default function AboutProject(){

    return (
        <div className={`${stylesGeneral.container} ${styles.container}`}>
            <div className={styles.title}>
                <span className={`${stylesGeneral['grey-text']} ${styles.anchor}`}>{varT.anchorTitle}</span>

                <span className={styles['red-text']}>{varT.greatQuote[0]}</span>
                <br/>
                <span className={styles['red-text']}>{varT.greatQuote[1]}</span>
                <br />
                <span className={styles['red-text']}>{varT.greatQuote[2]}</span>
                <br />
                <span  className={styles['red-text']} style={{marginBottom: 44.84}}>{varT.greatQuote[3]}</span>
                <span className={`${stylesGeneral['grey-text']} ${styles.signature}`}>{varT.authorGreatQuote}</span>
            </div>
            <hr className={stylesGeneral.line}/>

            <div className={styles['div-info']}>
                {varT.paragraphs.map(text=><div className={styles['div-paragraf']} key={text}>{text}</div>)}
            </div>
            <div className={styles['div-button']}>
                <button className={styles['button-author']} >{varT.aboutAuthor}</button>
            </div>
        </div>
    )
}
