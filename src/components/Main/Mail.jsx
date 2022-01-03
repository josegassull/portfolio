import React from 'react'

const Mail = (props) => {
    return (
        <div className={"text-center"}>

        <div className="p-2 mt-2">
            <h4 className={ props.isDarkMode ? "text-light" : "text-dark"}>
                josegassull@gmail.com
            </h4>
        </div>
    </div>
    )
}

export default Mail
