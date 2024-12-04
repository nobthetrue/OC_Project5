import Gallery from '../../components/Gallery/gallery'
import Banner from '../../components/Banner/banner'

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
