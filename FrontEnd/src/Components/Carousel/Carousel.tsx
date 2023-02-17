import { Carousel } from '@sefailyasoz/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const  Affiche: React.FunctionComponent = () => {

const CarouselData = [
  {
    headerText: null,
    subText: 'Sub Text One',
    image: 'https://picsum.photos/300/300',
    style: { height: '200px', width: '200px' }
  },
  {
    headerText: 'Header Text Two',
    subText: null,
    image: 'https://picsum.photos/1200/800',
    style: { height: '200px', width: '200px' }
  },
  {
    headerText: null,
    subText: null,
    image: 'https://picsum.photos/720/720',
    style: { height: '200px', width: '200px' }
  },
  {
    headerText: 'Header Text Four',
    subText: 'Sub Text Four',
    image: 'https://picsum.photos/1920/1080',
    style: { height: '200px', width: '200px' }
  },
  {
    headerText: 'Header Text Five',
    subText: 'Sub Text Five',
    image: 'https://picsum.photos/480/360',
    style: { height: '200px', width: '200px' }
  },
]
  return    <Carousel
              data={CarouselData}
              autoPlay={true}
              rightItem={<FaArrowRight />}
              leftItem={<FaArrowLeft />}
              animationDuration={3000}
              headerTextType="black"
              subTextType="white"
              size="normal"
              
            />
}

export default Affiche