import React from 'react'
import './BenefitsCard.css'
import ButtonImg from '../../ButtonImg/ButtonImg'
export default function BenefitsCard({icon,TittelBenfens,desBenfens}) {
  return (
    <div className='contenierCardBenefits box-shadow b-2' data-aos="zoom-in-right">
      <ButtonImg imgsrc={icon} stylediv={'BenefitsCardIcon b-1'} styleimg={'iconwidth'}/>
      <h3 className='heading BenefitsTittel'>{TittelBenfens}</h3>
      <p className='f-20 desBenefts'>{desBenfens}</p>
    </div>
  )
}
