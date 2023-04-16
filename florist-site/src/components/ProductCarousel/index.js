

import './style.css'
import { carouselImages } from '../../data/carouselImages';

function ProductCarousel() {

    console.log(carouselImages)

    const slides = carouselImages.map((slide) => {
        return slide.url
    }) 

    console.log(slides)



    return (
        <div className='overflow-scroll'>
            {slides.map((img) => {
                return (
                    
                        <img src={img} />
                  
                )
            })}
        </div>
    )

}



export default ProductCarousel;