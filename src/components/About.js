
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
class About extends Component {
    constructor (props) {
        super (props);
        console.log("costructor");
    }

render(){
    return (
        <div>
            <h1>About</h1>
            <h2>This is First React Project</h2>
            <User name={"onkar fucntion prop"}/>
            <UserClass name={"Onkar class prop"}/>
        </div>
    );
}
}

export default About;