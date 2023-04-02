import './style.css'
import heroImage1 from '../../images/annie-spratt-gJ3EpFlw_ss-unsplash.jpg';
import heroImage2 from '../../images/bianka-csenki--nxksGFSoeM-unsplash.jpg';
import heroImage3 from '../../images/taisiia-shestopal-JZDyFwGAEqY-unsplash.jpg';

function Hero() {
    return (
        <div className='w-11/12 flex flex-col-reverse justify-around items-center mx-auto px-10 xl:flex-row bg-slate-100'>
            <div className='flex flex-col pb-20 justify-center items-center xl:w-1/2'>
                <h2 className='text-4xl text-center underline underline-offset-8 decoration-4'>Welcome to The Potted Petal</h2>
                <h4 className='py-5'>The first place to come for flowers</h4>
            </div>
            <div className='container relative mx-auto grid grid-rows-2 grid-flow-col gap-4 my-20 px-8 py-6 rounded-xl text-slate-100 xl:w-1/2'>
                <div className='relative h-min col-start-1 row-span-2'>
                    <div class="w-full h-full absolute  justify-center items-center bg-none hover:bg-gradient-to-tr from-slate-900/0 to-slate-600/30" />
                    <h4 className='absolute bottom-3 left-6'>Valentine's Day</h4>
                    <img className='' src={heroImage3} />
                </div>
                <div className='relative col-start-2 m-auto h-full '>
                    <div class="w-full h-full absolute  justify-center items-center  bg-none hover:bg-gradient-to-tr from-slate-900/0 to-slate-600/30" />
                    <h4 className='absolute bottom-3 right-6'>Browse the range</h4>
                    <img className='z-10 object-fill h-full' src={heroImage2} />

                </div>
                <div className='relative col-start-2 m-auto h-full'>
                    <div class="w-full h-full absolute  justify-center items-center bg-none hover:bg-gradient-to-tr from-slate-900/0 to-slate-600/30" />
                    <h4 className='absolute bottom-3 right-6 '>See our process</h4>
                    <img className='h-full object-fill' src={heroImage1} />

                </div>
            </div>
        </div>
    )
}

export default Hero;