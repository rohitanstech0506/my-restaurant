import React from 'react'
import { statsData } from '../data/data'
import Animated from '../Components/Animated'

const States = () => {
  return (
    <section id='states' className='px-auto mt-32'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-12 md: gap-15 max-w-7xl mx-auto'>
        {statsData.map( (v,i) => (
          <Animated key={i} delay={0.2} className='flex flex-col items-center text-center'>
            <span className='text-6xl'>{v.number}</span>
            <h3 className='mt-5.5 text-2xl'>{v.title}</h3>
            <p className='mt-3.5 font-light text-zinc-600 max-w-72'>{v.description}</p>
          </Animated>
        ) )}
      </div>
    </section>
  )
}

export default States