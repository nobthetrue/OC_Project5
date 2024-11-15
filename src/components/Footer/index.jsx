import styled from 'styled-components'

const FooterStyled = styled.footer`
     padding: 30px 70px;
     heigh: 100px;
     display: flex;
     align-items: center;
     flex-direction: column;
     color: white;
     background-color: black;
`

const StyledLogo = styled.img`
     width: 122px;
     heigh: 40px;
`

function LogoFooter() {
     return (
          <FooterStyled>
               <StyledLogo src="/images/LOGOFooter.png" alt="Logo Kasa blanc" />
               <h4>2020 Kasa. All rights reserved</h4>
          </FooterStyled>
     )
}

export default LogoFooter
