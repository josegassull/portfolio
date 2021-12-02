import Header from "./Header"
import Logo from "./Logo"
import ModeButton from "./ModeButton"
import React, { useEffect, useState } from "react"
import GroupButton from "./GroupButton";
import Displayer from "./Displayer";

const Home = () => {

    /* To change light/dark mode */
    const [isDarkMode, setDarkMode] = useState(false);

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

    return <div className={"container"}>
        <div className={"row"}><Header isDarkMode={isDarkMode} /></div>
        <div className={"row"}><Logo isDarkMode={isDarkMode} /></div>
        <div className={"row"}><ModeButton changeMode={(e) => changeMode(e)} isDarkMode={isDarkMode} /></div>
        <div className={"row"}><GroupButton /></div>
        <div className={"row"}><Displayer /></div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>a</div>
        <div className={"row"}>f</div>
    </div>
}

export default Home