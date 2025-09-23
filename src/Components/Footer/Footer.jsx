import React from 'react'
import './Footer.css'
import logo from '../../assets/images/little.svg'
import itemFooterRight from '../../Data/DataFooterRight'
import ButtonImg from '../ButtonImg/ButtonImg'
import itemsFooter from '../../Data/DataFooter'
import face from '../../assets/images/facebook.svg'
import tiwter from '../../assets/images/tiwitter.svg'
import linkd from '../../assets/images/linkindin.svg'
export default function Footer({TextFooter}) {
    const dess=[{dess:'Terms of Service'},{dess:'Privacy Policy'},
        {dess:'Cookie Policy'},];   
    const icons =[{imgsrc:face,link:"https://www.facebook.com/heba.momar.37?mibextid=ZbWKwL"},
        {imgsrc:tiwter,link:"#"},
        {imgsrc:linkd,link:"https://www.linkedin.com/in/hiba-momar-6a516135a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}]
  return (
    <section className='b-2 Footer' >
      <div className='containerFooter'>
<div className='FooterLeft'>
     <div className='NavLogoFooteer '>
          <img src={logo} className='LogoFooter'></img>
          <span className=' textLogFotter' >Little Learners</span>
         </div>
         <p className='f-20 desfooterRight'>{TextFooter}</p>
         <div className='FooterLeftBottom'>
        {itemFooterRight?.map((item)=>{
            return(
            <div className='FooterBottomContainer'>
            <ButtonImg imgsrc={item.imgsrc} stylediv={'FooterBottom b-2'} styleimg={'FooterBottomimg'} />
            <span className='FooterBottomspan f-20' >{item.desc}</span>
            </div>
            )
        })}

         </div>
</div>


<div className='FooterRightContainer'>
     <div className='FooterRight'>
      {itemsFooter?.map((item)=>{
        return(
            <div className='FooterRightul'>
            <h4 className='f-20 tittelUl'>{item.titel}</h4>
            <ul>
            {item.content?.map((li)=>{
                return(
                    <li className='FooterRighList f-20'>{li}</li>
                )
            })}
            </ul>
            </div>
        )
      })

      }
      </div>
 </div>
      </div>
      <div className='LineTop'></div>
      <div className='bettwenLine'>
       <div className='bettwenLineLeft'>
     {dess?.map((des)=>{
        return(
        <span className='f-20 desline'>{des.dess}</span>
        )
     })}
       </div>
       <div className='bettwenLineright'>
        {icons?.map((icon)=>{
        return(
            <a href={icon.link}><ButtonImg imgsrc={icon.imgsrc} stylediv={'b-2 FooterBottom1 '} styleimg={'FooterBottomimg'}/></a>
        )
        })}
       </div>
      </div>
        <div className='LineTop1'></div>
        <p className="endfotter f-20">Copyright © [2023] Little Learners Academy. All rights reserved.</p>
    </section>
  )
}
