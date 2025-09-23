import React from 'react'
export default function ButtonImg({imgsrc,styleimg,stylediv,onclick}) {
  return (
      <div className={stylediv}  onClick={onclick} >
    <img src={imgsrc} className={styleimg} />
  </div>
  )
}
