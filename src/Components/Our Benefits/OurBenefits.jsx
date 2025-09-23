import React from 'react'
import './OurBenefits.css'
import Tittel from '../Tittel/Tittel'
import DataBenefits from '../../Data/DataBenefits'
import BenefitsCard from './BenefitsCard/BenefitsCard'
export default function OurBenefits() {
  return (
    <section className='Benefit p-y'>
      <Tittel TittelSpan={'Children Deserve Bright Future'}
      heading={'Our Benefits'}
      des={'With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your childs future.'}
      />
      <div className='BenefitsContainr d-f m-t'>
    {DataBenefits?.map((cards,index)=>{
    return(
        
          <BenefitsCard key={index}
          icon={cards.icon}
          TittelBenfens={cards.TittelBenfens}
          desBenfens={cards.desBenfens}
          />  
      
    )
    })}
      </div>
    </section>
  )
}
