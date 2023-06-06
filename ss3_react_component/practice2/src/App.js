import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Home from "./Home";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }
  handleLogin = () => {
    this.setState({isLogin: true})
  }
  handleLogout = () => {
    this.setState({isLogin: false})
  }
  render() {
    const {isLogin} = this.state;
    if (isLogin) return (<Home onLogout={this.handleLogout}/>)
    return (
    <div style={{textAlign: "center"}}>
      <div>
        <h2>Let log in</h2>
        <button onClick={this.handleLogin}>LogIn</button>
      </div>
    </div>
    );
  }
}

export default App;
