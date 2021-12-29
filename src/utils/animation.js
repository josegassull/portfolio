import Scroll from "react-scroll";

const scroll = Scroll.animateScroll;

function scrollDownSmooth(yCoord) {
    scroll.scrollTo(350);
}

export default {
    scrollDownSmooth
}