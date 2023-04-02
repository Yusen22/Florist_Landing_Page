import {useState, useEffect} from 'react';

export const SetScroll = () => {

    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const updateScroll = () => {
            setScrollPos(window.scrollY);
            
        }

        window.addEventListener('scroll', updateScroll);

        updateScroll();

        return () => window.removeEventListener('scroll', updateScroll)
    }, [])
    
return scrollPos;

}