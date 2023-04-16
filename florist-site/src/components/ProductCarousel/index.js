
import { useState } from 'react';
import './style.css'
import { carouselImages } from '../../data/carouselImages';
import { ChevronLeft, ChevronRight } from 'react-feather';

function ProductCarousel() {

    console.log(carouselImages)

    const slides = carouselImages.map((slide) => {
        return slide.url
    })

    console.log(slides)

    const [active, setActive] = useState(0);

    const prev = () => setActive((active) => active === 0 ? slides.length - 1 : active - 1)
    const next = () => setActive((active) => active === slides.length - 1 ? 0 : active + 1)


    return (
        <div className='w-11/12 relative mx-auto overflow-hidden px-6 py-12 bg-slate-100'>
            <div className='w-full relative flex  transition-transform ease-out duration-500' style={{ transform: `translateX(-${active * 100}%)` }}>
                {slides.map((img, index) => {
                    return (

                        <img className='w-full px-12 object-cover object-center' src={img} id={index} />

                    )
                })}

            </div>
            <div className='absolute w-11/12 flex items-center justify-between p-5 mx-auto inset-0'>
                <button className='rounded-full bg-slate-100 p-2' onClick={prev}>
                    <ChevronLeft size={50} />
                </button>
                <button className='rounded-full bg-slate-100 p-2' onClick={next}>
                    <ChevronRight size={50} />
                </button>
            </div>
            <div className='absolute flex h-3 bottom-20 justify-center w-full mx-auto space-x-3 t-100 mx-auto shadow-xl'>
                {carouselImages.map((index) => {
                    return (
                        <span className={index.index -1 === active ? 'bg-slate-100 w-12 drop-shadow' : 'bg-slate-400 w-12 opacity-60 drop-shadow'} ></span>
                    )
                })}
            </div>



        </div>
    )

}



export default ProductCarousel;