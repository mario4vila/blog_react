import './App.css';
import Header from "./component/Header";
import Slider from "./component/Slider";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import Articles from "./component/Articles";

function App() {

    return (
        <div className="App">
            <Header/>
            <Slider/>

            <div className="center">
                <section id="content">
                    <h2 className="subheader">Últimos artículos</h2>
                    <Articles/>
                </section>

                <Sidebar/>

                <div className="clearfix"></div>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
