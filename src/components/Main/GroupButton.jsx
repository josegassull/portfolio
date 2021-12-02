import React from "react";
import "../../styles/main/groupbutton.css";
import AboutMeButton from "./AboutMeButton"
import GameDevButton from "./GameDevButton"
import WebDevButton from "./WebDevButton"

const GroupButton = () => {
    return <div className={"text-center mt-4"} role="group" aria-label="Basic example">
        <button style={{border: "none", background: "none"}}><AboutMeButton /></button>
        <button style={{border: "none", background: "none"}}><WebDevButton /></button>
        <button style={{border: "none", background: "none"}}><GameDevButton /></button>

        {/* <button type="button" class="btn btnYellow">Web Pages</button> */}
    </div>
}
export default GroupButton;