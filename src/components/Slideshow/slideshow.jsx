import dataAnnonces from '../../annonce.json'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './slideshow.scss'

function Slideshow() {
     const [currentIndex, setCurrentIndex] = useState(0)
     const { id } = useParams()

     const annonce = dataAnnonces.find((annonce) => annonce.id === id)

     const hasMultipleImages = annonce.pictures.length > 1

     return (
          <div className="slider">
               {hasMultipleImages && (
                    <div>
                         <button
                              className="prev-button"
                              onClick={() => {
                                   setCurrentIndex((prevIndex) =>
                                        prevIndex === 0
                                             ? annonce.pictures.length - 1
                                             : prevIndex - 1
                                   )
                              }}
                              aria-label="Image précédente"
                         >
                              &#10094;
                         </button>
                         <button
                              className="next-button"
                              onClick={() => {
                                   setCurrentIndex((prevIndex) =>
                                        prevIndex ===
                                        annonce.pictures.length - 1
                                             ? 0
                                             : prevIndex + 1
                                   )
                              }}
                              aria-label="Image suivante"
                         >
                              &#10095;
                         </button>
                         <p className="slider-number">
                              {currentIndex + 1}/{annonce.pictures.length}
                         </p>
                    </div>
               )}
               <div className="div-images">
                    <img
                         className="slider-images"
                         src={annonce.pictures[currentIndex]}
                         alt={annonce.title}
                         loading="lazy"
                    />
               </div>
          </div>
     )
}

export default Slideshow
