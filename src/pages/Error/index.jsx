import { Link } from 'react-router-dom'

function Error() {
     return (
          <div className="error-page">
               <h1>404</h1>
               <p>Oups ! La page que vous demandez n'existe pas</p>
               <Link to="/" className="lien-error-accueil">
                    Retourner à la page d'accueil
               </Link>
          </div>
     )
}

export default Error
