import Header from "./Header"
import Logo from "./Logo"
import ModeButton from "./ModeButton"
import React, { useEffect, useState } from "react"
import GroupButton from "./GroupButton"

const Home = () => {

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

    return <div>
        <Header isDarkMode={isDarkMode} />
        <Logo isDarkMode={isDarkMode}/>
        <ModeButton changeMode={(e) => changeMode(e)} isDarkMode={isDarkMode} />
        <GroupButton />
    </div>
}

export default Home