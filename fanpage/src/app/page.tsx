import Image from 'next/image'
import logo from "./assets/images/logo.png"
import Welcome from './components/welcome'

export default function Home() {
  return (
    <section className='bg-[#F2E9E4]'>
      <div className='lg:h-[calc(100vh-3rem)] w-full relative'>
        <Image
          // layout="fill"
          // objectFit="contain"
          src={logo}
          alt="logo"
        />
      </div>
      <Welcome />
    </section>
  )
}
