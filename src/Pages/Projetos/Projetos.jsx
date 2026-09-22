import EmblaCarousel from "./EmblaCarousel";
import "./base.css";
import "./sandbox.css";
import "./embla.css"



const OPTIONS = {}
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const Projetos = () => {
 

  return (
    <>
       <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  )
};
