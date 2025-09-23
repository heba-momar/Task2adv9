import React from 'react'
import Tittel from '../Tittel/Tittel'
import DataNavigate from '../../Data/DataNavigate'
import CardNavigate from './CardNavigate/CardNavigate'
export default function Navigate() {
  return (
    <section className='p-y'>
      <Tittel TittelSpan={'Explore More'} heading={'Navigate through our Pages'}
    des={'Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school'}
    />
    <div className='NavigatesContainer m-t '>
     { DataNavigate.map((index)=>{
        return(
 <CardNavigate  tittel={index.tittel} desNav={index.des}/>
        )
     })}
    </div>
    </section>
  )
}
