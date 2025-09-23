import React from 'react'
import './CardFqa.css'
import mins from '../../../assets/images/mins.svg'
import plus from '../../../assets/images/plus.svg'
import ButtonImg from '../../ButtonImg/ButtonImg'
export default function CardFqa({isOpen, questiones, answeres,onClick}) {
     const icon=isOpen?mins:plus
  return (
        <>
        <div className="questionContainer b-2" style={{
    backgroundColor: !isOpen ? "var(--color-hover)" :"var(--color-white) ",
  }} >
        
          <div className='d-f gab'
          >
            <h3 className='f-20 questittel'>{ questiones}</h3>
             <span><ButtonImg stylediv={'mins b-2'} imgsrc={icon} styleimg={'plus'} onclick={onClick}/></span>
          </div>
          <div className={`hm-question-answer ${isOpen ? "show" : ""}`}>
         <p className='f-20 answer'>{ answeres}</p>
        </div>   
      </div>
      </>
  )
}
