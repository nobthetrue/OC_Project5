import { Link } from 'react-router-dom'

function Error() {
     return (
          <div>
               <h1>404</h1>
               <h4>Oups ! La page que vous demandez n'existe pas</h4>
               <Link to="/">Retourner à la page d'accueil</Link>
          </div>
     )
}

export default Error
