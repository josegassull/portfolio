import React, {useState} from "react";
import DisplayInfo from "./DisplayInfo";
import DisplayWeb from "./DisplayWeb";
import DisplayGames from "./DisplayGames";

const Displayer = () => {

    var content=0;

    if(content===0){
        return <div></div>
    }

    if(content===1){
        return <div>
        <div className={"row"}><DisplayInfo /></div>
    </div>
    }

    if(content===2){
        return <div>
        <div className={"row"}><DisplayWeb /></div>
    </div>
    }

    if(content===3){
        return <div>
        <div className={"row"}><DisplayGames /></div>
    </div>
    }

    
}
export default Displayer;