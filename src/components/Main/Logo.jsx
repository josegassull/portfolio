const Logo = (props) => {
    return <div className={"text-center mt-4"}>
        <img id="anima" src={props.isDarkMode ? process.env.PUBLIC_URL + "/assets/gifs/animaDark.gif" : process.env.PUBLIC_URL + "/assets/gifs/animaLight.gif"} alt="animaGif" />
    </div>
}

export default Logo
