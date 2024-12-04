import { useParams } from 'react-router-dom'
import { useState } from 'react'
import dataAnnonces from '../../annonce.json'
import Collapse from '../Collapse/collapse'
import { FaStar } from 'react-icons/fa6'
import './ficheannonce.scss'

function FicheAnnonce() {
     const [currentIndex, setCurrentIndex] = useState(0)
     const { id } = useParams()

     const annonce = dataAnnonces.find((annonce) => annonce.id === id)

     const ratingStar = parseInt(annonce.rating)
     const missStar = 5 - ratingStar

     return (
          <div className="fiche-annonce">
               <div className="slider">
                    <button
                         className="prev-button"
                         onClick={() => {
                              setCurrentIndex((prevIndex) =>
                                   prevIndex === 0
                                        ? annonce.pictures.length - 1
                                        : prevIndex - 1
                              )
                         }}
                    >
                         &#10094;
                    </button>
                    <button
                         className="next-button"
                         onClick={() => {
                              setCurrentIndex((prevIndex) =>
                                   prevIndex === annonce.pictures.length - 1
                                        ? 0
                                        : prevIndex + 1
                              )
                         }}
                    >
                         &#10095;
                    </button>
                    <p className="slider-number">
                         {currentIndex + 1}/{annonce.pictures.length}
                    </p>
                    <div className="div-images">
                         <img
                              className="slider-images"
                              src={annonce.pictures[currentIndex]}
                              alt=""
                         />
                    </div>
               </div>
               <div className="description-annonce">
                    <div className="desc-gauche">
                         <p className="title-annonce">{annonce.title}</p>
                         <p className="localisation">{annonce.location}</p>
                         <div>
                              {annonce.tags.map((tag) => (
                                   <span key={tag} className="tags">
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
                         <div className="rating">
                              {[...Array(ratingStar)].map(() => (
                                   <FaStar className="star filled" />
                              ))}
                              {[...Array(missStar)].map(() => (
                                   <FaStar className="star empty" />
                              ))}
                         </div>
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
