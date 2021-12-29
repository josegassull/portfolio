import DisplayInfo from "./DisplayInfo";
import DisplayWeb from "./DisplayWeb";
import DisplayGames from "./DisplayGames";
import DisplayCourses from "./DisplayCourses";

const Displayer = (props) => {

    const layouts = [
        {
            value: 0, layout: <div/>
        },
        {
            value: 1, layout: <div className={"row"}><DisplayInfo/></div>
        },
        {
            value: 2, layout: <div className={"row"}><DisplayWeb/></div>
        },
        {
            value: 3, layout: <div className={"row"}><DisplayGames/></div>
        },
        {
            value: 4, layout: <div className={"row"}><DisplayCourses/></div>
        }
    ];

    return (
        props.display ? layouts.find(layout => layout.value == props.display).layout : layouts[0].layout
    )

    
}
export default Displayer;