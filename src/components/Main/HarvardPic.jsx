import "../../styles/main/displayer.css";

const HarvardPic = () => {
    return <div>
        <img className="img-fluid profilePic" src={`${process.env.PUBLIC_URL}/assets/img/harvardPic.png`}/>
    </div>
}

export default HarvardPic
