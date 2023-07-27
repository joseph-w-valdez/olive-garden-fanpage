"use client"
import Image from 'next/image'
import logo from "./assets/images/logo.png"
import Welcome from './components/welcome'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <section className="snap-start snap-always bg-white w-full h-full flex items-center justify-center text-8xl">
        <Image className='w-full max-w-[950px] h-full' src={logo} alt="logo" />
      </section>
      <section className="snap-start snap-always bg-amber-200 w-full  h-full flex justify-center text-8xl">
        <Welcome />
      </section>
      <section className="snap-start snap-always bg-cyan-200 w-full h-full flex justify-center text-8xl">
        <Welcome />
      </section>
      <section className="snap-start snap-always bg-fuchsia-200 w-full h-full flex justify-center text-8xl">
        <Welcome />
      </section>
      <section className="snap-start snap-always">
        <Footer />
      </section>
    </>
  )
}
