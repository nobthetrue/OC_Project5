import Collapse from '../../components/Collapse'
import FicheAnnonce from '../../components/FicheAnnonce'

function FicheLogement() {
     return (
          <div>
               <FicheAnnonce />
               <Collapse title="Equipement" desc=""/>
               <Collapse title="Description" desc=""/>
          </div>
     )
}

export default FicheLogement
