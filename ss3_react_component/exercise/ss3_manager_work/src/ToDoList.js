import React, {Component} from "react";

export class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoName: '',
            toDoList: []
        }
    }

    handleChange (event) {
        this.setState({toDoName: event})
    }
    handleAddItem () {
        this.setState({
            toDoName: '',
            toDoList: [this.state.toDoName, ...this.state.toDoList]
        })
    }

    render() {
        return (
            <>
                <h1 style={{textAlign: "center", marginBottom: "20px"}}><strong>Todo List</strong></h1>
                <div className="d-flex justify-content-center">
                    <input value={this.state.toDoName} className="d-flex justify-content-center"
                           onChange={(event) => this.handleChange(event.target.value)}/>
                    <button onClick={() => this.handleAddItem()}>Add</button>
                </div>
                <ul>
                    {
                        this.state.toDoList.map((toDo, index) => (
                            <li key={index}>{toDo}</li>
                        ))
                    }
                </ul>
            </>
        );
    }
}