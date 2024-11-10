import React from "react";

class UserClass extends React.Component {

constructor(props) 
{
    super(props);
    this.state={
      userInfo:{
        name:"Dummy",
        location:"default"
      }

    }
}

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/onkarsonar");
    const json= await data.json();
    console.log(json);
    this.setState({
        userInfo:json,
    })
}

    render() {
        const {name,location} = this.state.userInfo;
        const {count} = this.state;
        return (<div className="user-card">
            <h1>count state = {count
                }</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>Count Increse</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: @onkarsonar</h3>
        </div>
        );

    }
}

export default UserClass;