import Image from 'next/image'
import logo from "./assets/images/logo.png"
import Welcome from './components/Welcome'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className='snap-y h-minus-navbar snap-mandatory overflow-y-scroll'>
      <section className="bg-white w-full h-minus-navbar landscape:h-fit flex items-center justify-center text-8xl lg:snap-start lg:snap-always lg:w-full">
        <Image
          src={logo} alt="logo"
          width={0} height={0} sizes='100vw'
          className='w-3/4 lg:w-full max-w-[950px] lg:h-full object-contain'
          priority
        />
      </section>
      <section className="w-full pb-12 flex justify-center text-8xl lg:snap-start lg:snap-always lg:h-full lg:pb-0">
        <Welcome />
      </section>
      <section className="lg:snap-start lg:snap-always ">
        <Footer />
      </section>
    </div>
  )
}
