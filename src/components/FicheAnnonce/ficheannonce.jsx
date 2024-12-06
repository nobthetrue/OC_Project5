import { useParams } from 'react-router-dom'
import { useState } from 'react'
import dataAnnonces from '../../annonce.json'
import Collapse from '../Collapse/collapse'
import { FaStar } from 'react-icons/fa6'
import './ficheannonce.scss'
import React from 'react'
import Error from '../../pages/Error'

function FicheAnnonce() {
     const [currentIndex, setCurrentIndex] = useState(0)
     const { id } = useParams()

     const annonce = dataAnnonces.find((annonce) => annonce.id === id)

     if (!annonce) {
          return <Error />
     }

     const ratingStar = parseInt(annonce.rating)
     const stars = [...Array(5)].map((_, index) => (
          <FaStar
               key={index}
               className={`star ${index < ratingStar ? 'filled' : 'empty'}`}
          />
     ))

     const hasMultipleImages = annonce.pictures.length > 1

     return (
          <div className="fiche-annonce">
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
               <div className="description-annonce">
                    <div className="desc-gauche">
                         <p className="title-annonce">{annonce.title}</p>
                         <p className="localisation">{annonce.location}</p>
                         <div>
                              {annonce.tags.map((tag, index) => (
                                   <span key={tag + index} className="tags">
                                        {tag}
                                   </span>
                              ))}
                         </div>
                    </div>
                    <div className="desc-droite">
                         <div className="host-name-picture">
                              <p className="host-name">{annonce.host.name}</p>
                              <img
                                   className="host-picture"
                                   src={annonce.host.picture}
                                   alt=""
                              />
                         </div>
                         <div className="rating">{stars}</div>
                    </div>
               </div>
               <div className="div-collapse-fiche-annonce">
                    <Collapse
                         className="collapse-fiche-annonce"
                         title="Description"
                         desc={annonce.description}
                    />
                    <Collapse
                         className="collapse-fiche-annonce"
                         title="Equipement"
                         desc={
                              <div>
                                   {annonce.equipments.map(
                                        (equipment, index) => (
                                             <div
                                                  key={index}
                                                  className="collapse-equipments"
                                             >
                                                  {equipment}
                                             </div>
                                        )
                                   )}
                              </div>
                         }
                    />
               </div>
          </div>
     )
}

export default FicheAnnonce
