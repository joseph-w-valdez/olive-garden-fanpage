"use client"
import Image from 'next/image'
import logo from "./assets/images/logo.png"
import Welcome from './components/welcome'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <section className="bg-white w-full h-fit flex items-center justify-center text-8xl lg:snap-start lg:snap-always lg:w-full">
        <Image className='w-3/4 lg:w-full max-w-[950px] lg:h-full' src={logo} alt="logo" />
      </section>
      <section className="w-full h-fit pb-12 flex justify-center text-8xl lg:snap-start lg:snap-always lg:h-full lg:pb-0">
        <Welcome />
      </section>
      <section className="lg:snap-start lg:snap-always ">
        <Footer />
      </section>
    </>
  )
}
