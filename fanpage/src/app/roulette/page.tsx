import Image from 'next/image'
import Spinner from '../components/spinner'

export default function RoulettePage() {
  return (
      <div className="relative bg-white w-full flex flex-col item-center justify-center">
        <Spinner />
        <div className="text-center text-black py-10 block lg:hidden">
          <h1 className="text-7xl my-10">Savor The Unexpected</h1>
          <p className="text-3xl">Olive Garden&apos;s Roulette of Culinary Treasures</p>
        </div>
      </div>
  )
}
