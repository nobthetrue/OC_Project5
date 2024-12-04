import PropTypes from 'prop-types'
import './banner.scss'

function Banner({ title, image, alt }) {
     return (
          <div className="banner">
               <div className="shadow-banner"></div>
               <img src={image} alt={alt} />
               <p>{title}</p>
          </div>
     )
}

export default Banner

Banner.protoTypes = {
     title: PropTypes.string,
     image: PropTypes.string.isRequired,
     alt: PropTypes.string.isRequired,
}
