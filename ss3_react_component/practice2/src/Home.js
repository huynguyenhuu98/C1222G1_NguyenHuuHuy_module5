import React, {Component} from "react";

class Home extends Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h1>Hello</h1>
                <button onClick={this.props.onLogout}>LogOut</button>
            </div>
        );
    }
}
export default Home