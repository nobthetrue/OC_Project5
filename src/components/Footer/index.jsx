import { FaRegCopyright } from 'react-icons/fa'

function LogoFooter() {
     return (
          <footer>
               <img src="/images/LOGOFooter.png" alt="Logo Kasa blanc" />
               <div className="footer-text">
                    <FaRegCopyright className="icon-c" />
                    <p>2020 Kasa. All rights reserved</p>
               </div>
          </footer>
     )
}

export default LogoFooter
