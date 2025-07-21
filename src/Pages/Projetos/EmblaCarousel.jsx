import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Modal from './Modal'
import { projeto } from './projeto' 

const EmblaCarousel = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  const [modalAberto, setModalAberto] = useState(false)
  const [projetoSelecionado, setProjetoSelecionado] = useState(null)

 
  const abrirModal = (projeto) => {
    setProjetoSelecionado(projeto)
    setModalAberto(true)
  }

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projeto.map((projeto) => (
            <div className="embla__slide" key={projeto.id}>
              <img
                className="embla__slide__img cursor-pointer"
                src={projeto.imagem}
                alt={projeto.titulo}
                onClick={() => abrirModal(projeto)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
            />
          ))}
        </div>
      </div>

      
      <Modal
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        projeto={projetoSelecionado}
      />
    </div>
  )
}

export default EmblaCarousel
