"use client"
import Image from 'next/image'
import logo from "./assets/images/logo.png"
import Welcome from './components/welcome'
import Footer from './components/footer'
import Carousel from './components/carousel'

export default function Home() {
  return (
    <div className='bg-[#F2E9E4]'>
      <section className='w-full relative'>
        <Image
          src={logo}
          alt="logo"
          className='lg:w-screen lg:h-screen'
        />
      </section>
      <Welcome />
      <Footer />
      <Carousel />
    </div>
  )
}

