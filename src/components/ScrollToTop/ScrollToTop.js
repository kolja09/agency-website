// This is ScrollToTop component, To scroll from anywhere to top
import arrow from '../../assets/arrow-up.svg';
import {Up} from "./ScrollElements";

const ScrollToTop = () => {
    const ScrollUp = () => {
        const element = document.getElementById('home')
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
        });
    };

    return <Up onClick={() => ScrollUp()}>
        <img src={arrow} alt='to top'/>
    </Up>
};

export default ScrollToTop;
