import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/little.svg'
import itemsNav from '../../Data/DataNavBar'
import banner from '../../assets/images/banner.svg'
import error from '../../assets/images/email.svg'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  const[activeItem,SetactiveItem]=useState('Home');
const [IsOpen,SetIsOpen] = useState(false);
 const icon= IsOpen ? error :banner
const toggelMenu=()=>{
  SetIsOpen(!IsOpen)
}
  return (
    <nav classNameclassName={` ${IsOpen ? 'open' : ''}`}>
      <div className='Nav b-2'>

  
      <div className='NavLogo '>
       <img src={logo} className='Logo'></img>
       <span className=' textLog' >Little Learners</span>
      </div>
   <ul className='container-list'>
      { itemsNav?.map((item,index)=> {
          return(
       <li  key={index} onClick={()=>SetactiveItem(item.content)} className={`${activeItem == item.content ? 'active' : ''} `}>
        <NavLink to={item?.Link}>{item?.content}</NavLink></li>
          )
      }) } 
    </ul> 

    <div className='banner' onClick={toggelMenu}>
      <img src={icon} alt='banner'/>
    </div>

     <ul className={`navmeuncontainer ${IsOpen && "show"}`}>
     { itemsNav?.map((item,index)=> {
          return(
       <li key={index}onClick={()=>SetactiveItem(item.content)}
       className={`${activeItem == item.content ? 'active' : ''} `}>
       <NavLink to={item?.Link}>{item?.content}</NavLink></li>

          )
      }) } 
      
     </ul>
    </div>
 </nav>
  )
}
