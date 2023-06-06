import logo from './logo.svg';
import './App.css';
import students from './data/index.js';

function App() {
    return (
        <div>
            <h2>Students</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                {students.map(student => (
                    <tr>
                        <td>{student.company}</td>
                        <td>{student.contact}</td>
                        <td>{student.country}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
