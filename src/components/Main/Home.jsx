import Header from "./Header";
import Logo from "./Logo";
import ModeButton from "./ModeButton";
import React, { useEffect, useState } from "react";
import GroupButton from "./GroupButton";
import Displayer from "./Displayer";
import Mail from "./Mail";

const Home = () => {

    /* To change light/dark mode */
    /*const [isDarkMode, setDarkMode] = useState(false);
    const [display, setDisplay] = useState();

    function changeMode(e) {
        setDarkMode(e);
    }

    useEffect(() => {
        setBackgroundColor();
    })

    function setBackgroundColor() {
        isDarkMode ? document.body.style.backgroundColor = "#121212"
            : document.body.style.backgroundColor = "#f2f2f2";
    }

    function changeDisplay(e) {
        setDisplay(e);
    }*/

    return <div className={"container"}>
        {/* <div className={"row"}><Header isDarkMode={isDarkMode} /></div>
        <div className={"row"}><GroupButton getDisplay={(e) => changeDisplay(e)} /></div>
        <div className={"row"}><ModeButton changeMode={(e) => changeMode(e)} isDarkMode={isDarkMode} /></div>
        <div className={"row"}><Displayer display={display} /></div>
        <div className={"row"}><Logo isDarkMode={isDarkMode} /></div>
        <div className={"row"}><Mail isDarkMode={isDarkMode}/></div> */}
        <div className={"row"}>
                            <h4>Currently unavailable.</h4>
                        </div>
    </div>
}

export default Home