import React from 'react'
import './Tittel.css'
export default function Tittel({TittelSpan,heading,des}) {
  return (
    <div className='TittelSection'>
        <span className='spansection f-20'>{TittelSpan}</span>
      <h2 className='heading tittel'> {heading}</h2>
      <p className='f-20 dessection'>{des}</p>
    </div>
  )
}
