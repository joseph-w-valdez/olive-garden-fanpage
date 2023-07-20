import Image from 'next/image'
import logo from "./assets/images/logo.png"

export default function Home() {
  return (
    <section className='bg-white'>
      <div className='h-[calc(100vh-3rem)] w-full relative'>
        <Image
          layout="fill"
          objectFit="contain"
          src={logo}
          alt="logo"
        />
      </div>
    </section>
  )
}
