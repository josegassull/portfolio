import React from 'react'
import "../../styles/main/displayer.css";
import Carousel from "./Carousel";

const DisplayWeb = () => {
    return (
        <div>
            <div className={"container"}>
                <div className={"row styleWeb"}>
                    <h4>Frontend Technologies:</h4>
                    <h6>JavaScript - React - HTML5 - CSS - Bootstrap - Sass - Git - Github</h6>
                    <h4>Backend Technologies:</h4>
                    <h6>Python - Django - C# - SQLite - Git - Github</h6>
                </div>
            </div>
            <div><Carousel/></div>
        </div>

    )
}

export default DisplayWeb
