import {useState} from "react";


const User=({name})=>{
    const [count,setCount]=useState(0);
    const [count2]=useState(1);
    // useEffect(()=>{

    // },[]);
    // async function getUserInfo() {
    // }
    return (<div className="bg-gray-400 rounded-lg m-4 p-4">
        <h1>count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Pune</h3>
        <h3>Contact: @onkarsonar</h3>
    </div>
    );
};

export default User;