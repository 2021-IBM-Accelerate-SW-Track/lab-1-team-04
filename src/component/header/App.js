import Header from "./component/header"
import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css';
import TodoForm from './component/header/TodoForm';
import TodoList from './component/header/TodoList';


function App() {

  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

//function Welcome(props) {
//  return <h1>Hello, {props.name}</h1>;
//}

/*function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}*/

//ReactDOM.render(<App />, document.getElementById('root'));



export default App;
