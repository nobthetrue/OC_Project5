import { Link } from 'react-router-dom'

function Header() {
     return (
          <div>
               <img src="/images/LOGOHeader.png" alt="Logo Kasa" />
               <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/APropos">A Propos</Link>
               </nav>
          </div>
     )
}

export default Header
