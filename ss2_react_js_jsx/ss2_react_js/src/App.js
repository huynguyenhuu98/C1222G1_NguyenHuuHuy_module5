import logo from './logo.svg';
import './App.css';
import students from './data/index.js';
function App() {
  return (
    <div>
      <h2>Students</h2>
        {students.map(student => (
            <tr>
                <td>{student.company}</td>
                <td>{student.contact}</td>
                <td>{student.country}</td>
            </tr>
        ))}

    </div>
  );
}

export default App;
