import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
     margin-left: 40px;
     font-size: 15px;
`

const HeaderStyled = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin: 30px 70px;
`

function Header() {
     return (
          <HeaderStyled>
               <img src="/images/LOGOHeader.png" alt="Logo Kasa" />
               <nav>
                    <StyledLink to="/">Accueil</StyledLink>
                    <StyledLink to="/APropos">A Propos</StyledLink>
               </nav>
          </HeaderStyled>
     )
}

export default Header
