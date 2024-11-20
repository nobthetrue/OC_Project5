import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardStyled = styled.div`
     display: flex;
     position: relative;
     height: 27vw;
     border-radius: 10px;
     background-image: url(${(props) => props.pictures});
     background-size: cover;
     background-position: center;
`

const ShadowCardStyled = styled.div`
     width: 100%;
     height: 100%;
     border-radius: 10px;
     background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(10, 10, 10, 0) 42%,
          rgba(4, 4, 4, 0.205) 99.99%,
          rgba(0, 0, 0, 0.5) 100%
     );
`

const TitleCardStyled = styled.h4`
     position: absolute;
     margin: 10px;
     bottom: 0;
     width: 40%;
     color: white;
`

function Card({ id, cover, title }) {
     return (
          <Link to={`/FicheLogement/${id}`}>
               <CardStyled key={id} pictures={cover}>
                    <ShadowCardStyled>
                         <TitleCardStyled>{title}</TitleCardStyled>
                    </ShadowCardStyled>
               </CardStyled>
          </Link>
     )
}

Card.propTypes = {
     id: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     cover: PropTypes.string.isRequired,
}

export default Card
