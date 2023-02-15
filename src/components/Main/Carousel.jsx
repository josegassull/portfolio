import React from 'react'
import "../../styles/main/displayer.css";

const Carousel = () => {
    return (
        <div className={"container"}>
            <div id="carouselExampleControls" className="carousel slide styleWeb" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/javascriptLogo.png`} className="styleCarousel" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/reactLogo.png`} className="styleCarousel" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/htmlLogo.png`} className="styleCarousel" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/cssLogo.png`} className="styleCarousel" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/bootstrapLogo.png`} className="styleCarousel" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/pythonLogo.png`} className="styleCarousel" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/djangoLogo.png`} className="styleCarousel" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/csharpLogo.png`} className="styleCarousel" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/sqliteLogo.png`} className="styleCarousel" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/gitLogo.png`} className="styleCarousel" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/githubLogo.png`} className="styleCarousel" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default Carousel
