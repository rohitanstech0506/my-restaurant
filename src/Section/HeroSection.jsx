import { Star } from 'lucide-react'
import Animated from '../Components/Animated'

const avatars = [
  "{import.meta.evn.BASE_URL}assets/user-1.jpeg",
  "/assets/user-2.jpeg",
  "/assets/user-3.jpeg",
  "/assets/user-4.jpeg",
]
const HeroSection = () => {
  return (
    <div className=' flex flex-col items-center min-h-screen justify-center bg-[url("/assets/heroBanner.png")] bg-cover bg-center bg-no-repeat px-4 pt-20'>
      <Animated b={-20} delay={0.2}>
        <p className='text-orange-600 text-[30px] text-center'>WHERE FLAVOR MEETS ELEGANCE</p>
      </Animated>
      <Animated>
        <h1 className='text-5xl md:text-6xl font-medium max-w-3xl text-center mt-5 font-urbanist text-balance'>Crafted for Unforgettable dining moments</h1>
      </Animated>
      <Animated delay={0.2}>
        <p className='text-zinc-600 max-w-md text-center mt-3'>Experience carefully curated menus, fresh local ingredients and impeccable service in a space made for every celebration.</p>
      </Animated>
      <Animated>
         <a
            href="#booking-process"
            className="bg-orange-500 hover:bg-orange-600 font-medium text-[#fff] px-6 py-3 text-[20px] rounded-[30px] transition mt-8 block"
          >
            Book A Table
          </a>
      </Animated>
      <Animated className='flex items-center justify-center md:justify-start mt-9'>
        <div className='flex -space-x-3.5 pr-3'>
        {avatars.map( (src, i) => (
          <img key={i} src={src} alt="Guest" className='size-10 border-2 border-slate-50 rounded-[30px] hover:-transtale-y-px transition' />
        ))}
        </div>
        <div>
          <div className='flex items-center gap-0.5'>
            {[...Array(5)].map( (_, i) => (
              <Star key={i} className='size-3.5 fill-orange-500 text-orange-500'/>
            ))}
          </div>
          <p className='text-zinc-800'>4.8/5 Rating - 10,000 reviews</p>
        </div>
      </Animated>
    </div>
  )
}

export default HeroSection
