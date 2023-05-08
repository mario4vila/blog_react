import React from "react";
import logo from "../logo.svg";
import MyComponent from "./MyComponent/MyComponent";

class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    add(){
        this.setState({
            count: (this.state.count + 1)
        });
    }

    rest = ()=>{
        this.setState({
            count: (this.state.count - 1)
        });
    }

    render() {
        const name = 'Mario';
        const age = 12

        return (
            <div className="App-header">
                <h2 className="subheader">Últimos artículos</h2>

                <p>{this.state.count}</p>
                <button onClick={this.add.bind(this)}>Sumar</button>
                <button onClick={this.rest}>Restar</button>

                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

            </div>
        );
    }
}

export default Articles;