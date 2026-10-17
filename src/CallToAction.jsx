import { img } from 'motion/react-client'
import React from 'react'
import Animated from './Components/Animated'
import { ArrowRight } from 'lucide-react'
let floatingDishes = [
  {src: '/assets/dish1.png', alt: "Dish1", className:'top-6 left-4 md:top-10 md:left-[6%] lg:left-[10%]'},
  {src: '/assets/dish2.png', alt: "Dish2", className:'bottom-6 left-6 md:bottom-10 md:left-[10%] lg:left-[14%]'},
  {src: '/assets/dish3.png', alt: "Dish3", className:'top-6 right-4 md:top-10 md:right-[6%] lg:right-[10%]'},
  {src: '/assets/dish4.png', alt: "Dish4", className:'bottom-6 right-6 md:bottom-10 md:right-[10%] lg:right-[14%]'}
]
const CallToAction = () => {
  return (
    <section id='calltoaction' className='relative overflow-hidden bg-orange-500 px-6 flex flex-col justify-center items-center mt-44 min-h-100 md:min-h-110'>
      <div className='absolute inset-10 w-full max-w-7xl mx-auto pointer-events-none'>
      {floatingDishes.map((dish)=>(
        <img key={dish.src} src={dish.src} alt={dish.alt} className={`absolute size-20 md:size-28 lg:size-35 rounded-full object-cover pointer-events-auto transition-all duration-300 hover:scale-105 ${dish.className}`} />
      ))}
      </div>
      <div className='relative z-10 text-center max-w-2xl mx-auto '>
        <Animated>
          <h1 className='text-3xl md:text-[40px] fount-medium text-white font-urbanist text-balance'>
            Every Meal Is Made To Be Remembered
          </h1>
        </Animated>
        <Animated y={20} delay={0.2}>
          <p className='mt-4 text-white max-w-sm mx-auto'>Join us for fresh ingredientds, signature recipes and an unforgettable dining experience.</p>
        </Animated>
        <Animated delay={0.2} className='flex items-center justify-center'>
          <a href="" className='flex items-center gap-2.5 text-black bg-white pl-5 pr-2 py-2 rounded-full mt-5.5 transition'>Book Your Table
            <span className='size-7 rounded-full bg-black text-white grid place-content-center'>
            <ArrowRight size={16}/>
            </span>
          </a>
        </Animated>
      </div>
    </section>
  )
}

export default CallToAction