import PropTypes from 'prop-types'
import { useState } from 'react'
import dataAnnonces from '../../annonce.json'
import { useParams } from 'react-router-dom'

function Collapse() {
     const [isOpen, setIsOpen] = useState(false)
     const { id } = useParams()

     const annonce = dataAnnonces.find((annonce) => annonce.id === id)

     return isOpen ? (
          <div>
               <button onClick={() => setIsOpen(!isOpen)} type="button">
                    {title}
               </button>
               <ul>
                    {annonce.equipments.map((equipment) => (
                         <li>{equipment}</li>
                    ))}
                    {/* {dataAnnonces.map((annonce) => {
                         return <li>{annonce[id].equipments}</li>
                    })} */}
               </ul>
               <button onClick={() => setIsOpen(false)} type="button">
                    Description
               </button>
               <ul>
                    <li>{annonce.description}</li>
               </ul>
          </div>
     ) : (
          <div>
               <button onClick={() => setIsOpen(true)} type="button">
                    Equipements
               </button>
               <button onClick={() => setIsOpen(true)} type="button">
                    Description
               </button>
          </div>
     )
}

export default Collapse

Collapse.propTypes = {
     title: PropTypes.string.isRequired,
     desc: PropTypes.string, // 'desc' est optionnel si utilisé avec 'annonce'
}
