import './style.css'
import Logo from "../../images/the-potted-petal-low-resolution-logo-color-on-transparent-background.png"
import { useState, useTransition } from 'react'
import { SetScroll } from '../../hooks/setScroll'

function Header() {

    const [dropdown, setDropdown] = useState(false)

    const onMouse = () => {
        setDropdown(true)
    }

    const offMouse = () => {
        setDropdown(false)
    }

    const setScroll = SetScroll()

    console.log(setScroll)


    return (

        // Navbar 
        <nav className={`sticky top-0 z-50 flex relative items-center justify-around mx-auto py-3 px-20 bg-white ${setScroll > 45 ? 'shadow-md' : ''}`}>

            {/* Logo image div */}
            <div className='py-2'>
                <img className="max-h-28" src={Logo} />
            </div>

            {/* Navigation div */}
            <div className="hidden mx-auto justify-evenly md:flex md:flex-col">
                
                <div class="flex justify-center mt-2">
                    <div class="mb-2 xl:w-96">
                        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                class="relative m-0 block w-[1%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                placeholder="Search here for flowers"
                                aria-label="Search"
                                aria-describedby="button-addon2" />
                            <span
                                class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                id="basic-addon2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="h-5 w-5">
                                    <path
                                        fill-rule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex py-3 space-x-12 uppercase text-lg">
                    <a href="#">Discover</a>
                    <a onMouseEnter={onMouse} onMouseLeave={offMouse} href="#">Shob By Type</a>
                    <a href="#">Shop By Colour</a>
                    <a href="#">Shop By Occassion</a>
                    <a href="#">Careers</a>
                    <a href="#">Contact</a>
                </div>

            </div>
            <div className="hidden md:flex">
                <button className="rounded-full py-3 px-10 bg-yellow-400 hover:bg-yellow-300">Basket</button>
            </div>
        </nav>

    )
}

export default Header