import { useParams } from 'react-router-dom'
import dataAnnonces from '../../annonce.json'

function FicheAnnonce() {
     const { id } = useParams()
     const annonce = dataAnnonces.find((annonce) => annonce.id === id)

     return (
          <div>
               <div>
                    {annonce.pictures.map((picture) => (
                         <img src={picture} alt="" />
                    ))}
                    <h2>{annonce.title}</h2>
                    <p>{annonce.location}</p>
                    <span>{annonce.tags}</span>
               </div>
               <div>
                    <div>
                         <p>{annonce.host.name}</p>
                         <img src={annonce.host.picture} alt="" />
                    </div>
                    <p>{annonce.rating}</p>
               </div>
          </div>
     )
}

export default FicheAnnonce
