
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "./UserContext";
class About extends Component {
    constructor (props) {
        super (props);
        // console.log("costructor");
    }

render(){

    return (
        <div>
            <h1>About</h1>
            <div>Logged In User Name - <UserContext.Consumer>{({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}</UserContext.Consumer></div>
            <h2>This is First React Project</h2>
            <User name={"onkar fucntion prop"}/>
            <UserClass name={"Onkar class prop"}/>
        </div>
    );
}
}

export default About;