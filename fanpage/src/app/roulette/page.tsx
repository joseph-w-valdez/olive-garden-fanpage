import Spinner from "../components/Spinner";
import Results from '../components/SpinnerResult'
import { FinalMenuItemProvider } from "../contexts/SpinnerResultContext";

export default function RoulettePage() {

  return (
      <FinalMenuItemProvider>
        <div className="relative bg-white w-full flex flex-col item-center justify-center">
          <Spinner />
          <section className="text-center text-black py-10 block lg:hidden">
            <h1 className="text-5xl my-10">Savor The Unexpected</h1>
            <p className="text-3xl">Olive Garden&apos;s Roulette of Culinary Treasures</p>
          </section>
          <Results />
        </div>
      </FinalMenuItemProvider>
  )
}
