import React, { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
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
      <div className="lists-container">
        <AddTodo
          userInput={userInput}
          setUserInput={setUserInput}
          todosToDo={todosToDo}
          setTodoToDo={setTodosToDo}
        />
        <List
          categ="Scheduled"
          todosToDo={todosToDo}
          todosDone={todosDone}
          setTodoToDo={setTodosToDo}
          setTodoDone={setTodosDone}
        />
        <List
          categ="Done"
          todosDone={todosDone}
          setTodoToDo={setTodosToDo}
          setTodoDone={setTodosDone}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
