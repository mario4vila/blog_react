import React from "react";
import logo from "../logo.svg";
import MyComponent from "./MyComponent/MyComponent";
import Movies from "./Movies/Movies";

function hello(name, age) {
    return (
        <div>
            <h2>Soy {name}</h2>
            <h2>Tengo {age} años</h2>
        </div>
    );
}
class Articles extends React.Component {
    render() {
        const name = 'Mario';
        const age = 12

        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    {hello(name, age)}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <section className='components'>
                    <MyComponent/>
                    <Movies/>
                </section>

            </header>
        );
    }
}

export default Articles;