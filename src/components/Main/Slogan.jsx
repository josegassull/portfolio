import React from 'react'

const Slogan = (props) => {
    return (
    <div className={"text-center"}>

    <div className="p-2 mt-2">
        <h5 className={ props.isDarkMode ? "text-light" : "text-dark"}>
            "Computational Thinking"
        </h5>
    </div>
</div>
    )
}

export default Slogan
