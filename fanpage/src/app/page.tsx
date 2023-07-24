import Image from 'next/image'
import logo from "./assets/images/logo.png"
import Welcome from './components/welcome'
import Footer from './components/footer'


export default function Home() {
  return (
    <section className='bg-[#F2E9E4]'>
      <div className='w-full relative'>
        <Image
          // layout="fill"
          // objectFit="contain"
          src={logo}
          alt="logo"
          className='lg:w-screen lg:h-screen'
        />
      </div>
      <Welcome />
      <Footer />
    </section>
  )
}
