import React from "react";
import "../../styles/main/webdevbutton.css";
import Scroll from 'react-scroll';

const WebDevButton = (props) => {

    /*To scroll*/
    var scroll = Scroll.animateScroll;

    return <div className={"text-center mt-4"}>
        <button onClick={() => scroll.scrollTo(500)} type="button" class="btn btn-primary">Web Development</button>
    </div>
}
export default WebDevButton;