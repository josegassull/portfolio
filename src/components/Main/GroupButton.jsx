import React from "react";

const GroupButton = (props) => {
    return <div className={"text-center mt-5"} role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-success btn-lg">About Me</button>
        <button type="button" class="btn btn-outline-primary btn-lg">Web Pages</button>
        <button type="button" class="btn btn-outline-danger btn-lg">Games</button>
    </div>

}
export default GroupButton;