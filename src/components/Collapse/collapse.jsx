import PropTypes from 'prop-types'
import { useState } from 'react'
import './collapse.scss'

function Collapse({ title, desc }) {
     const [isOpen, setIsOpen] = useState(false)
     const [isAnimating, setIsAnimating] = useState(false)

     const handleToggle = () => {
          if (isOpen) {
               setIsAnimating(true)
               setTimeout(() => {
                    setIsAnimating(false)
                    setIsOpen(false)
               })
          } else {
               setIsOpen(true)
          }
     }

     return (
          <div className="collapse-div">
               <div className="collapse-div-button">
                    <h3 className="title-collapse">{title}</h3>
                    <button
                         onClick={handleToggle}
                         className="collapse-button"
                         type="button"
                    >
                         <img
                              src="../images/chevron.png"
                              alt="chevron"
                              className={isOpen ? 'bas' : 'haut'}
                         />
                    </button>
               </div>

               <div
                    className={`collapse-content ${isOpen ? 'open' : 'close'} ${
                         isAnimating ? 'closing' : ''
                    }`}
               >
                    <div className="collapse-inner">{desc}</div>
               </div>
          </div>
     )
}

export default Collapse

Collapse.propTypes = {
     title: PropTypes.string.isRequired,
     desc: PropTypes.oneOfType([
          PropTypes.string.isRequired,
          PropTypes.object.isRequired,
     ]),
}
