import React from "react";
import "../../styles/main/gamedevbutton.css";
import Scroll from 'react-scroll';

const GameDevButton = (props) => {

    /* To Scroll */
    var scroll = Scroll.animateScroll;

    return <div className={"text-center mt-4"}>
        <button onClick={() => scroll.scrollTo(500)} type="button" class="btn btn-danger">Game Development</button>
    </div>
}
export default GameDevButton;