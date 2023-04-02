import './style.css'
import heroImage1 from '../../images/annie-spratt-gJ3EpFlw_ss-unsplash.jpg';
import heroImage2 from '../../images/bianka-csenki--nxksGFSoeM-unsplash.jpg';
import heroImage3 from '../../images/taisiia-shestopal-JZDyFwGAEqY-unsplash.jpg';

function Hero() {
    return (
        <div className='container relative mx-auto grid grid-rows-2 grid-flow-col gap-6 my-20 px-8 py-6 bg-gray-200'>
            <div className='relative h-min col-start-1 row-span-2'>
                <img className='z-1 ' src={heroImage3}/>
                   
                
            </div>
            <div className='relative col-start-2 m-auto h-full'>
                <img className='object-fill h-full' src={heroImage2}/>
                    
                
            </div>
            <div className='relative col-start-2 m-auto h-full'>
                <img className='h-full object' src={heroImage1}/>
                
            </div>
        </div>
    )
}

export default Hero;