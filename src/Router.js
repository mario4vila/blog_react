import React from "react";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import MyComponent from "./component/MyComponent/MyComponent";
import Articles from "./component/Articles";
import Movies from "./page/Movies/Movies";
import Error from "./page/Error"
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./page/Home";
import Blog from "./page/Blog";
import Form from "./page/Form";
import PageArticle from "./page/PageArticle";

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>

                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/home" Component={Articles}/>
                    <Route path="/blog" Component={Blog}/>
                    <Route path="/blog/article/:id" Component={PageArticle}/>
                    <Route path="/form" Component={Form}/>


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

                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Router;