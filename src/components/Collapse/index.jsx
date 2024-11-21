import PropTypes from 'prop-types'
import { useState } from 'react'
function Collapse({ title, desc }) {
     const [isOpen, setIsOpen] = useState(false)

     return (
          <div>
               <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={isOpen ? 'open' : 'close'}
                    type="button"
               >
                    {title}
               </button>
               <div className={isOpen ? 'open-desc' : 'close-desc'}>
                    <p>{desc}</p>
               </div>
          </div>
     )
}

export default Collapse

Collapse.propTypes = {
     title: PropTypes.string.isRequired,
     desc: PropTypes.string, // 'desc' est optionnel si utilisé avec 'annonce'
}
