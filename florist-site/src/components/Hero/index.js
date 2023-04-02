import './style.css'
import heroImage1 from '../../images/annie-spratt-gJ3EpFlw_ss-unsplash.jpg';
import heroImage2 from '../../images/bianka-csenki--nxksGFSoeM-unsplash.jpg';
import heroImage3 from '../../images/taisiia-shestopal-JZDyFwGAEqY-unsplash.jpg';

function Hero() {
    return (
        <div className='flex flex-col px-10 md:flex-row'>
            <div className='flex flex-col justify-center items-center md:w-1/2'>
                <h2 className='text-2xl'>Welcome to The Potted Petal</h2>
            </div>
            <div className='container relative mx-auto grid grid-rows-2 grid-flow-col gap-6 my-20 px-8 py-6 rounded-xl bg-gray-300 md:w-1/2'>
                <div className='relative h-min col-start-1 row-span-2'>
                    <div class="w-full h-full absolute  justify-center items-center bg-gradient-to-tr from-gray-900/50 to-gray-600/70 hover:bg-none" />
                    <img className='' src={heroImage3} />
                </div>
                <div className='relative col-start-2 m-auto h-full '>
                    <div class="w-full h-full absolute  justify-center items-center bg-gradient-to-tr from-gray-900/50 to-gray-600/70 hover:bg-none" />
                    <img className='z-10 object-fill h-full' src={heroImage2} />

                </div>
                <div className='relative col-start-2 m-auto h-full'>
                    <div class="w-full h-full absolute  justify-center items-center bg-gradient-to-tr from-gray-900/50 to-gray-600/70 hover:bg-none" />
                    <img className='h-full object-fill' src={heroImage1} />

                </div>
            </div>
        </div>
    )
}

export default Hero;