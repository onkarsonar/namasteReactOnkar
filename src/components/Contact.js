import React from "react";

const Contact=()=>{
    return (
        <div>
            <h1>Contact Number</h1>
            <p>+91-93XXXXXX04</p>
            <p>+91-78XXXXXX19</p>
            <p>Address</p><p>Pune, Maharashtra (MH), India</p>
            <form>
                <input type='text' className=" border border-black p-2 m-2" placeholder='name'/>
                <input type='text' className=" border border-black p-2 m-2"  placeholder="message"/>
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
            </form>
        </div>
    )
};

export default Contact;