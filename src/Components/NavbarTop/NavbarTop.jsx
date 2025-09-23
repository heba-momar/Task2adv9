import React from 'react'
import './NavbarTop.css'
import shamright  from '../../assets/images/shamright.svg'
import Designleft from '../../assets/images/Abstract Designleft.svg'
import Designright from '../../assets/images/Abstract Designright.svg'
import shaptop from '../../assets/images/shaptop.svg'
import shaPbottom from '../../assets/images/shaPbottom.svg'
import shaptoplaptopLeft from '../../assets/images/Abstract DesignLaptopLeft.png'
import shaPlaptopRigh from '../../assets/images/Abstract DesignLaptopRight.png'
import shaptopmobileLeft from '../../assets/images/Abstract Design left992.png'
import shaPombileRight from '../../assets/images/Abstract Design right992.png'
export default function NavbarTop() {
  return (
    <div className='containerNavTop b-2'>
      <div className='containerNav1'>
          <div className='desNav1 desTop'>
      <p className='f-20 f-14 '>Admission is Open, Grab your seat now</p>
      <img src={shamright}></img>
      </div>
    
      <img className='Designleft' src={Designleft}></img>
      <img className='Designright' src={Designright}></img>
      <img className='shaptop' src={shaptop}></img>
      <img className='shaPbottom' src={shaPbottom}></img>
        <img className='shaptoplaptopLeft' src={shaptoplaptopLeft}></img>
      <img className='shaPlaptopRight' src={shaPlaptopRigh}></img>

      <img className='shaptopmobileLeft' src={shaptopmobileLeft}></img>
      <img className='shaPombileRight' src={shaPombileRight}></img>
      </div>
    
    </div>
  )
}
