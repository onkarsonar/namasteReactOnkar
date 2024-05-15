import React from "react";
import ReactDOM from "react-dom/client";

const title = (<h1 className="head" tabIndex="1">Namase JSX</h1>);

const Title2 = () => (<h1 className="head" tabIndex="1">Namase JSX 2222</h1>);

const HeadingComponent = () => (
    <div id="container">
        {title} 
  
    {Title2()}
        <h1 className="head">namaste functional component </h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);