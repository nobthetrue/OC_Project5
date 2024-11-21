import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
     margin-left: 60px;
     font-size: 15px;
`

function Header() {
     return (
          <header>
               <img src="/images/LOGOHeader.png" alt="Logo Kasa" />
               <nav>
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
