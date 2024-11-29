// import PropTypes from 'prop-types'
// import { useState } from 'react'

// function Collapse({ title, desc }) {
//      const [isOpen, setIsOpen] = useState(false)

//      return (
//           <div className="collapse-div">
//                <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="collapse-button"
//                     type="button"
//                >
//                     {title}
//                </button>
//                <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
//                     <div className="collapse-inner">{desc}</div>
//                </div>
//           </div>
//      )
// }

// export default Collapse

// Collapse.propTypes = {
//      title: PropTypes.string.isRequired,
//      desc: PropTypes.string.isRequired,
// }

import PropTypes from 'prop-types'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

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
                         <FaChevronDown className="icon-collapse" />
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
     desc: PropTypes.string.isRequired,
}
