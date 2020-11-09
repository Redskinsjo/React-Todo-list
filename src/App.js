import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [todosToDo, setTodosToDo] = useState([]);
  const [todosDone, setTodosDone] = useState([]);

  return (
    <div>
      <Header />
      <div className="main">
        <div className="lists-container">
          <AddTodo
            userInput={userInput}
            setUserInput={setUserInput}
            todosToDo={todosToDo}
            setTodoToDo={setTodosToDo}
          />

          <Main
            todosToDo={todosToDo}
            todosDone={todosDone}
            setTodosToDo={setTodosToDo}
            setTodosDone={setTodosDone}
          />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
