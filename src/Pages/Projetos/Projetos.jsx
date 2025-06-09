import EmblaCarousel from "./EmblaCarousel";
import "./base.css";
import "./sandbox.css";
import "./embla.css"
import Header from "./Header";



const OPTIONS = {}
const SLIDE_COUNT = 7
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const Projetos = () => {
 

  return (
    <>
       <Header />
       <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  )
};
