import "../../styles/main/displayer.css";

const MitPic = () => {
    return <div>
        <img className="img-fluid profilePic" src={`${process.env.PUBLIC_URL}/assets/img/mitPic.png`}/>
    </div>
}

export default MitPic
