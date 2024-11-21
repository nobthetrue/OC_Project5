import Gallery from '../../components/Gallery'
import Banner from '../../components/Banner'

function Home() {
     return (
          <div>
               <div>
                    <Banner
                         image="./images/FondHome.png"
                         alt="Banner Home"
                         title="Chez vous, partout et ailleurs"
                    />
               </div>
               <div>
                    <Gallery />
               </div>
          </div>
     )
}

export default Home
