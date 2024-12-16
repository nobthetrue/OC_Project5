import { useParams } from 'react-router-dom'
import dataAnnonces from '../../annonce.json'
import Collapse from '../Collapse/collapse'
import './ficheannonce.scss'
import React from 'react'
import Error from '../../pages/Error'
import Slideshow from '../Slideshow/slideshow'

function FicheAnnonce() {
     const { id } = useParams()

     const annonce = dataAnnonces.find((annonce) => annonce.id === id)

     if (!annonce) {
          return <Error />
     }

     const ratingStar = parseInt(annonce.rating)
     const stars = [...Array(5)].map((_, index) => (
          <img
               key={index}
               src={
                    index < ratingStar
                         ? '../images/fillstar.png'
                         : '../images/emptystar.png'
               }
               alt={index < ratingStar ? 'Étoile remplie' : 'Étoile vide'}
               className={`star ${index < ratingStar ? 'filled' : 'empty'}`}
          />
     ))

     return (
          <div className="fiche-annonce">
               <Slideshow />
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
