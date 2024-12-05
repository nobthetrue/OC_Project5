import { FaRegCopyright } from 'react-icons/fa'
import './footer.scss'

function LogoFooter() {
     return (
          <footer>
               <img src="/images/LOGOFooter.png" alt="Logo Kasa blanc" />
               <div className="footer-text">
                    <p>
                         <FaRegCopyright className="icon-c" /> 2020 Kasa. All
                         rights reserved
                    </p>
               </div>
          </footer>
     )
}

export default LogoFooter
