import './App.css';
import Header from "./component/Header";
import Slider from "./component/Slider";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import Articles from "./component/Articles";
import Movies from "./component/Movies/Movies";
import React from "react";

function App() {

    return (
        <div className="App">
            <Header/>
            <Slider
                title={"Welcome to my blog made with React"}
            />

            <div className="center">
                <section id="content">
                    <Articles/>

                    <Movies/>
                </section>

                <Sidebar/>

                <div className="clearfix"></div>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
