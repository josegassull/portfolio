import React from 'react'
import "../../styles/main/displayer.css";

const DisplayGames = () => {
    return (
        <div>
            <div className={"container"}>
                <div className={"row styleGames"}>
                    <h4>Unity Engine</h4>
                    <h6>C# Scripting - Animations - Animator Tool - Camera - 1st Person - 3rd Person - 2D Projects - 3D Projects - Movility - Physics - UI - Path Finding - IA - Lightning - Sound - Skybox</h6>
                </div>
            </div>
            <div className={"container"}>
                <div className={"row styleGames2"}>
                    <h4>Sample Game: Thunder-Z</h4>
                    <h6>This is a prototype I created to share my experience and to exemplify what I can do.</h6>

                    <div className={"styleGameDownload"}>
                        <div className={"row"}>
                            <h4>Download Thunder-Z:</h4>
                            <h4><a href="https://drive.google.com/file/d/1oBNkGp8grDgg2i1-KhgVHHRClzmWfDcB/view?usp=sharing">DOWNLOAD</a></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/thunderPic1.jpg`} className={"styleGamePics"} />
                        </div>
                    </div>
                    <div className={"col"}>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/thunderPic2.jpg`} className={"styleGamePics"} />
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/thunderPic3.jpg`} className={"styleGamePics"} />
                        </div>
                    </div>
                    <div className={"col"}>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/thunderPic4.jpg`} className={"styleGamePics"} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DisplayGames
