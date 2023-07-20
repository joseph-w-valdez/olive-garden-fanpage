import Image from 'next/image'
import logo from "./assets/images/logo.png"

export default function Home() {
  return (
    <section>
      <Image className='w-full h-full' src={logo} alt="logo" />
    </section>
  )
}
