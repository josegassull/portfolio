import React from "react";

const ModeButton = (props) => {
    function changeMode() {
        props.changeMode(!props.isDarkMode);
    }

    return <div className={"col-12 text-center mt-1"}>
        <div className={"form-switch form-switch"}>
            <input className={"form-check-input"} type="checkbox"
                role="switch" id="flexSwitchCheckDefault"
                onChange={() => changeMode()} />
        </div>
        {/* <button className={props.isDarkMode ? "btn btn-outline-light mt-2" : "btn btn-outline-dark mt-2"}
            onClick={() => changeMode()}>{props.isDarkMode ? "Light" : "Dark"}</button> */}
    </div>
}
export default ModeButton;