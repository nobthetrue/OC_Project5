import Collapse from '../../components/Collapse'
import FicheAnnonce from '../../components/FicheAnnonce'

function FicheLogement() {
     return (
          <div>
               <FicheAnnonce />
               <Collapse title="Equipement"/>
               <Collapse title="Description"/>
          </div>
     )
}

export default FicheLogement
