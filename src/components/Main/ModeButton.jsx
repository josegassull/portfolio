import React from "react";

const ModeButton = (props) => {
    function changeMode() {
        props.changeMode(!props.isDarkMode);
    }

    return <div className={"text-center mt-4"}>
        <button className={props.isDarkMode ? "btn btn-outline-light mt-2" : "btn btn-outline-dark mt-2"}
                onClick={() => changeMode()}>{props.isDarkMode ? "Light" : "Dark"}</button>
    </div>

}
export default ModeButton;  