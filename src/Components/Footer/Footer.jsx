import React from 'react'
import Animated from '../Animated'
import { quickLinks, sitemapLinks, socialLinks } from '../../data/data'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='px-auto relative mt-44 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-wrap gap-6 justify-between pb-8'>
          <div className='flex flex-col items-start text-lefr'>
            <Animated>
              <img src="/assets/logo.svg" alt="logo" />
            </Animated>
            <Animated delay={0.2}>
              <p className='mt-3 text-sm/5.5 text-zinc-600 max-w-81.25'>Serving freshly prepared dishes with uthentic flovers, premium ingredients and exceptional hospitality every day.</p>
            </Animated>
            <div className='flex items-center gap-1.5 mt-6'>
              {socialLinks.map((icons,index)=>(
                <Animated key={index} delay={index * 0.05}>
                  <a href={icons.href} className='size-7.5 rounded-full border border-slate-300 grid place-content-center'>{icons.icon}</a>
                </Animated>
              ))}
            </div>
          </div>
          <div>
            <p className='font-medium mb-5'>Quick Links</p>
            <div className='flex flex-col gap-2.5'>
              {quickLinks.map((link,index)=>(
                <Animated key={link.name} delay={index * 0.05}>
                  <a href={link.href} className='text-zinc-600 hover:text-zinc-900'>{link.name}</a>
                </Animated>
              ))}
            </div>
          </div>
          <div>
            <p className='font-medium mb-5'>Get In Touch</p>
            <div className='space-y-2'>
              <Animated>
                <a href="mailto:shakyarohit0506@gmail.com" className='flex items-center gap-1 text-zinc-600 hover:text-zinc-900'>
                  <Mail size={16} className='shrink-0'/>
                  shakyarohit0506@gmail.com
                  </a>
              </Animated>
              <Animated delay={0.2}>
                <a href="tel:936-8698-338" className='flex items-center gap-1 text-zinc-600 hover:text-zinc-900'>
                  <Phone size={16} className='shrink-0'/>
                  9368698338
                  </a>
              </Animated>
            </div>
          </div>
          <div>
            <p className='font-medium mb-5'>Sitemap</p>
            <div className='flex flex-col gap-2.5'>
              {sitemapLinks.map((link,index) => (
                <Animated key={link.name} delay={index * 0.05}>
                  <a href={link.href} className='text-zinc-600 hover:text-zinc-900'>
                    {link.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between border-t border-slate-200 text-zinc-500 py-4.5'>
          <p>&copy; 2026. All Right Reserved.</p>
          <p>Designed by <a href="https://www.linkedin.com/in/rohit-shakya-273bb2393">Rohit Shakya</a></p>
        </div>
      </div>
      <div className='absolute inset-0 text-center select-none z-1 pointer-event-none'>
        <span className='text-[300px] tracking-wide font-urbanist font-semibold text-zinc-100/70'>Restro</span>
      </div>
    </footer>
  )
}

export default Footer