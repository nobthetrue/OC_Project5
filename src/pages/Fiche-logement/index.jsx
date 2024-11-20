import Collapse from '../../components/Collapse'
import FicheAnnonce from '../../components/FicheAnnonce'
import { useParams } from 'react-router-dom'
import dataAnnonces from '../../annonce.json'

function FicheLogement() {
     const { id } = useParams()

     const annonce = dataAnnonces.find((annonce) => annonce.id === id)

     return (
          <div>
               <FicheAnnonce />
               <Collapse title="Equipement" desc={annonce.equipments} />
               <Collapse title="Description" desc={annonce.description} />
          </div>
     )
}

export default FicheLogement
