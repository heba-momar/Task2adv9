//import React, { useState } from 'react'
import './FqaSection.css'
import DataFqa from '../../Data/DataFqa';
import CardFqa from './CardFqa/CardFqa';
import Tittel from '../Tittel/Tittel';
import { useState } from 'react';
export default function FqaSection() {
  const [OpenOccordion, setOpenOccordion] = useState(1);
  const HandleOccordionWithId = (id) => {
      setOpenOccordion((CurrentId) => (CurrentId === id ? null : id));
    };
  return (
    <section className='p-y'>
  <Tittel TittelSpan={'Solutions For The Doubts'} heading={'Frequently Asked Questions'}
    des={'Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your childs education.'}
            />
             <div className='FqaCardsContainer d-f m-t'>
      <div className='FqaCardsContainerRigt'data-aos="flip-left">

      {DataFqa.slice(0, 4).map((item) => (
              <CardFqa
                key={item.id}
                id={item.id}
                questiones={item.questiones}
                answeres={item.answeres}
                 isOpen={OpenOccordion === item.id}
                onClick={()=>HandleOccordionWithId(item.id)}
              />
            ))}
          </div>
          
            <div className="Accordion"data-aos="flip-left">
              {DataFqa.slice(4).map((item) => (
                <CardFqa
                  key={item.id}
                  id={item.id}
                  questiones={item.questiones}
                  answeres={item.answeres}
                  isOpen={OpenOccordion === item.id}
                  onClick={()=>HandleOccordionWithId(item.id)}
                />
              ))}

      </div>
   
    </div>
    </section>
  )
}
