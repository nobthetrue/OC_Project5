import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './card.scss'

const CardStyled = styled.div`
     background-image: url(${(props) => props.pictures});
`

function Card({ id, cover, title }) {
     return (
          <Link to={`/FicheLogement/${id}`}>
               <CardStyled className="card" key={id} pictures={cover}>
                    <div className="card-shadow">
                         <h4 className="card-title">{title}</h4>
                    </div>
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
