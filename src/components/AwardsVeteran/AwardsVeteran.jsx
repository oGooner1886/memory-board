import React from 'react'
import style from './AwardsVeteran.module.css'
import AwardVeteran from './AwardVeteran/AwardVeteran'
const AwardsVeteran = ({awards}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>// полученные награды</div>
      {awards.map((el) => (
              <AwardVeteran key={el.aid} title={el.title} gallery={el.gallery}/>
            ))}
    </div>
  )
}

export default AwardsVeteran
