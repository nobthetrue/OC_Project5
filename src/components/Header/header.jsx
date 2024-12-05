import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './header.scss'

const StyledLink = styled(Link)``

function Header() {
     return (
          <header>
               <img
                    className="logo-header"
                    src="/images/LOGOHeader.png"
                    alt="Logo Kasa"
               />
               <nav className="nav-header">
                    <StyledLink className="nav-link" to="/">
                         Accueil
                    </StyledLink>
                    <StyledLink className="nav-link" to="/APropos">
                         A Propos
                    </StyledLink>
               </nav>
          </header>
     )
}

export default Header
