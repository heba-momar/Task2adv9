import React from 'react'
import ButtonImg from '../ButtonImg/ButtonImg'
import star from '../../assets/images/star.svg'
    const icons =[{
    icon:star}, {icon:star},{icon:star},{icon:star},{icon:star},
      ]  
export default function CardTestimonials( {icon,titelTestimonial,des}) {
  return (
    <div className='CardTestimonials b-2 box-shadow' data-aos="zoom-out-up">
      <ButtonImg imgsrc={icon} stylediv={'TestimonialsDev'} styleimg={'Testimonialsicon'}/>
      <h3 className='titelTestimonials f-20'>{titelTestimonial}</h3>
       <div className=' testicon'>
         {icons?.map((icon,index)=>(
          <img key={index} src={star} alt="start" className='OurTestimonialsCard-start'/>
         )
        )}
        </div>
        <p className='f-20 destesticon'>{des}</p>
    </div>
  )
}
