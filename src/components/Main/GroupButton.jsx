import React from "react";

const GroupButton = (props) => {

    function getDisplay(e) {
        props.getDisplay(e.target.value);
    }

    return <div className={"btn-group text-center mt-4"} role="group" aria-label="Basic example">
        <button value={1}
            onClick={(e) => {
                getDisplay(e);
            }} className={"btn btn-dark"}>Info</button>
        <button value={2}
            onClick={(e) => {
                getDisplay(e);
            }} className={"btn btn-dark"}>Web</button>
        <button value={3}
            onClick={(e) => {
                getDisplay(e);
            }} className={"btn btn-dark"}>Games</button>
        <button value={4}
            onClick={(e) => {
                getDisplay(e);
            }} className={"btn btn-dark"}>Contact</button>

        {/* <button type="button" class="btn btnYellow">Web Pages</button> */}
    </div>
}
export default GroupButton;