import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
    }

    increase = () => {
        this.setState({number: this.state.number + 1})
    }
    decrease = () => {
        this.setState({number: this.state.number - 1})
    }

    render() {
        return (
            <div style={{textAlign: "center", margin: "10px"}}>
                <button onClick={this.decrease}>-</button>
                <span>{this.state.number}</span>
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}

export default App;
