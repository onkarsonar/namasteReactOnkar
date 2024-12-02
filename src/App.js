import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet, useParams } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
const styleCard = {
  backgroundColor: "#f0f0f0",
}

const Grocery = lazy(()=>import("./components/Grocery") );
const About = lazy(()=>import("./components/About"));
//first component will redner on UI
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
  {
    path:"/about",element:<Suspense fallabck={<h1>Loading About Us...</h1>}><About/></Suspense>
  },
  {
    path:"/contact",element:<Contact/>
  },
  {
    path:"/grocery", element:<Suspense fallback={<h1>Loading grocery...</h1>}><Grocery/></Suspense>
  },
  {
    path:"/restaurants/:resId",element:<RestaurantMenu/>
  },
    ],
    errorElement:<Error/>
  },
  // {
  //   path:"/about",element:<About/>
  // },
  // {
  //   path:"/contact",element:<Contact/>
  // },
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);