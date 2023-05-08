import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyComponent from "./component/MyComponent/MyComponent";
import Articles from "./component/Articles";
import Movies from "./component/Movies/Movies";
class Router extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Articles}/>
                    <Route path="/movies" Component={Movies}/>
                    <Route path="/test" Component={MyComponent}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;