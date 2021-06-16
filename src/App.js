import Header from "./component/header"
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input type="text" placeholder="add new activity"></input>
      <button>+</button>
    </div>
  );
}

export default App;
