import React from "react";
import "../../styles/main/aboutmebutton.css";
import Scroll from 'react-scroll';

const AboutMeButton = () => {

    /*To scroll*/
    var scroll = Scroll.animateScroll;

    return <div className={"text-center mt-4"}>
        <button onClick={() => scroll.scrollTo(500)} tittle= "button" type="button" class="btn btn-success">About Me</button>
    </div>
}
export default AboutMeButton;