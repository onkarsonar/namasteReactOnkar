import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const styleCard = {
  backgroundColor: "#f0f0f0",
}





//first component will redner on UI
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);