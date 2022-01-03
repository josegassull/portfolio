import React from 'react'
import ProfilePic from './ProfilePic';
import HarvardPic from './HarvardPic';
import MitPic from './MitPic';
import "../../styles/main/displayer.css";

const DisplayInfo = () => {
    return (
        <div className={"container"}>
            <div className={"row styleProfile"}>
                <div className={"col"}><h3>Hi! I'm José</h3>
                    <h6>I'm an argentinian Junior Software and Web Developer.</h6>
                    <div className={"row"}>
                        <div className={"col"}><ProfilePic /></div>
                    </div>
                    <div className={"styleProflieInfo"}>
                        <div className={"row"}>
                            <h8>I use JavaScript with React and Python mainly for the frontend and C# within Unity for games.</h8>
                        </div>
                        <div className={"row"}>
                            <h8>I'm familiar with technologies such as HTML5, CSS, Bootstrap, Git, Django and SQLite.</h8>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row styleCourses"}>
                <div className={"col"}>
                    <h4>Courses</h4>
                </div>
            </div>
            <div className={"row styleCourses2"}>
                <div className={"row styleCourses3"}>
                    <div className={"col"}><HarvardPic /></div>
                    <div className={"col"}><MitPic /></div>
                </div>
                <div className={"col"}>
                    <h6>• CS50's Web Programming with Python and JavaScript - 2020</h6>
                    <h6>• CS50: Introduction to Computer Science - 2020</h6>
                </div>
                <div className={"col"}>
                    <h6>• Performance Engineering of Software Systems 2021</h6>
                    <h6>• Software Construction Course - 2021</h6>
                    <h6>• Design and Analysis of Algorithms Course - In progress</h6>
                </div>
            </div>

        </div>
    )
}

export default DisplayInfo
