import React from 'react'
import './CardNavigate.css'
import icon from '../../../assets/images/shamright.svg'
import line from '../../../assets/images/line.svg'
export default function CardNavigate({tittel,desNav}) {
  return (
    <div className=' NavigateContainer b-2 box-shadow'data-aos="zoom-out-down">
     <h3 className='heading titteNavg'>{tittel}</h3>
    <img className='iconLine'src={line}></img>
           
     <p className='f-20 desnavg'>{desNav}</p>
     <button className='b-2 box-shadow buttonNavg f-20'> Learn More 
        <img src={icon}></img>
     </button>
    </div>
  )
}
