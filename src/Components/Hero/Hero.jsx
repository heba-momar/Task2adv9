import React from 'react'
import './Hero.css'
import heroimg from '../../assets/images/hero.png'
export default function Hero({span,TittelHero,tittelspan,desHero}) {
    const DataHero=[{id:1,number:'+7000',descnum:'Students Passed Out'},
   {id:2,number:'+37', descnum:'Awards & Recognitions'},
   {id:3,number:'+15', descnum:'Experience Educators'} ]
  
  return (
    <section className='p-y hero' data-aos="flip-up">
        <div className='HeroContainer'>
        <div className='HeroLeft'>
        <img src={heroimg} alt='heroimg' className='HeroImg'></img>
        </div>
        <div className='HeroRight'>
            <div className='HeroRightTop'>
                <h3 className='f-20 herospan'>{span}</h3>
          <h1 className='heading tittel'>{TittelHero} <span className='span'>{tittelspan}</span>  </h1>
          <p className='f-20 des'>{desHero}</p>
            </div>
          <div className='HeroRightbottom b-2'>
          {DataHero?.map((index)=>{
            return(
              <div>
            <h3 className='f-20  bootomheading'>{index.number}</h3>
            <span className='f-20 bootomspan'>{index.descnum}</span>
            <div className='mobileLine'></div>
            </div>
            )
          
          })}
          </div>
        </div>
         </div>
    </section>
  )
}
