import Card from '../Card'
import dataAnnonces from '../../annonce.json'
import styled from 'styled-components'

const GalleryStyled = styled.div`
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     gap: 45px;
     padding: 35px;
     margin: 40px 100px;
     background-color: #f6f6f6;
     border-radius: 25px;
`

function Gallery() {
     return (
          <GalleryStyled>
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
          </GalleryStyled>
     )
}

export default Gallery
