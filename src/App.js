import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Main/Home";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;