import React, { useEffect, useState } from 'react'
import Tittel from '../Tittel/Tittel'
import './OUrTesimon.css'
import ButtonImg from '../ButtonImg/ButtonImg'
import prev from '../../assets/images/shamleft.svg'
import next from '../../assets/images/shamright.svg'
import DataTestimonials from '../../Data/DataTestimonials'
import CardTestimonials from './CardTestimonials'
export default function OurTestimonials() {
  const [start , Setstart]=useState(0)
  const[IsMobilel,SetIsMobile]=useState(window.innerWidth <=990)
    useEffect(() => {
      const handleResize = () => SetIsMobile(window.innerWidth <= 990);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

const CardInD=IsMobilel? 1:3
const Maxstart=DataTestimonials.length - CardInD

const HandlPrev=()=>{
if(start > 0){
  Setstart(prev=>prev-1)
}
}
const HandlNext=()=>{
if(start < Maxstart){
  Setstart(prev=>prev+1)
}
}
  
  return (
    <section className='Container p-y'>
      <Tittel TittelSpan={'Their Happy Words 🤗'} heading={'Our Testimonials'}
      des={'Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.'}
      />
      <div className='OurTestimonialsContainer m-t d-f'>
      
          <div className='container-OurTestimonialsCards d-f'>
            <ButtonImg imgsrc={prev} stylediv={'shamleft b-2 shamTop'} styleimg={'Prev'} onclick={HandlPrev} displed={start===0}/>
   {DataTestimonials.slice(start,start+CardInD).map((h)=>{
    return(
        <CardTestimonials key={h.id} icon={h.icon} titelTestimonial={h.titelTestimonial}
        des={h.des}/>
    )
   })

   }

   <ButtonImg imgsrc={next} stylediv={'shamright shamTop b-2'} styleimg={'Prev'} onclick={HandlNext}displed={start >=Maxstart}/>
</div>

      </div>
      <div className='ShamBottom'>
        <ButtonImg imgsrc={prev} stylediv={'shamleft b-2'} styleimg={'Prev'} onclick={HandlPrev} displed={start===0}/>
        <ButtonImg imgsrc={next} stylediv={'shamleft b-2'} styleimg={'Prev'} onclick={HandlNext}displed={start >=Maxstart}/>
      </div>
    </section>
  )
}
