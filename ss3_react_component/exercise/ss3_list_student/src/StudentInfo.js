import {Component} from "react";

export class StudentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [{
                id: 1, name: "Nguyễn Văn A", age: 30, address: "Hà Nội"
            }]
        }
    }

    render() {
        return (
            <div>
                <h2 style={{textAlign:"center"}}>Danh sách sinh viên</h2>
                <table className="table-bordered">
                    <tr style={{textAlign:"center"}}>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    <tbody>
                    {this.state.studentList.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}