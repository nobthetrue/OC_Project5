import Card from '../Card/card'
import dataAnnonces from '../../annonce.json'
import './gallery.scss'

function Gallery() {
     return (
          <div className="gallery">
               {dataAnnonces.map((annonces) => {
                    return (
                         <Card
                              key={annonces.id}
                              id={annonces.id}
                              cover={annonces.cover}
                              title={annonces.title}
                         />
                    )
               })}
          </div>
     )
}

export default Gallery
