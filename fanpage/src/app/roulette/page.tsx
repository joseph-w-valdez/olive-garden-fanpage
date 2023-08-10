import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import Results from '../components/SpinnerResult'
import { FinalMenuItemProvider } from "../contexts/SpinnerResultContext";

export default function RoulettePage() {

  return (
      <FinalMenuItemProvider>
        <div className="relative bg-white w-full flex flex-col item-center justify-center">
          <Spinner />
          <section className="bg-[#404040] text-center text-white px-6 py-6 block lg:hidden lora">
            <h1 className="text-5xl my-4">Savor The Unexpected</h1>
            <p className="text-xl red-hat">Olive Garden&apos;s Roulette of Culinary Treasures</p>
          </section>
          <section>
            <Results />
          </section>
          <section >
            <Footer />
          </section>
        </div>
      </FinalMenuItemProvider>
  )
}
