import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MyComponent from "./component/MyComponent/MyComponent";
import Articles from "./component/Articles";
import Movies from "./component/Movies/Movies";
import Error from "./page/Error"
class Router extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Articles}/>
                    <Route path="/movies" Component={Movies}/>
                    <Route path="/my-component" Component={MyComponent}/>

                    <Route path="/test/:id/:name?" Component=
                        {
                            () => {
                                const {id, name} = useParams();
                                return (
                                <div>
                                    <h1>Hello Mario</h1>
                                    <h2>ID: {id}</h2>
                                    {name &&
                                        <h2>{name}</h2>
                                    }
                                </div>
                                )
                            }
                        }
                    />

                    <Route path="*" Component={Error}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;