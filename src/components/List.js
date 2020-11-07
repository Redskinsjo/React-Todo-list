import React from 'react';
import Todo from './Todo';

const List = ({ categ, todosToDo, setTodoToDo, todosDone, setTodoDone }) => {
  let renderToDoList;
  if (todosToDo) {
    if (todosToDo.length === 0) {
      const empty = ['', '', ''];
      renderToDoList = empty.map((todo, index) => {
        return <Todo empty={true} key={index} categ={categ} />;
      });
    } else {
      renderToDoList = todosToDo.map((todo, index) => {
        return (
          <Todo
            key={todo + index}
            categ={categ}
            todo={todo}
            todosToDo={todosToDo}
            setTodoToDo={setTodoToDo}
            todosDone={todosDone}
            setTodoDone={setTodoDone}
          />
        );
      });
    }
  }
  let renderDoneList;
  if (todosDone) {
    if (todosDone.length === 0) {
      const empty = ['', '', ''];
      renderDoneList = empty.map((todo, index) => {
        return <Todo empty={true} key={index} categ={categ} />;
      });
    } else {
      renderDoneList = todosDone.map((done, index) => {
        return (
          <Todo
            key={done + index}
            categ={categ}
            done={done}
            todosDone={todosDone}
            setTodoDone={setTodoDone}
          />
        );
      });
    }
  }
  return (
    <div>
      <h2>{categ}</h2>
      {categ === 'Scheduled' ? renderToDoList : renderDoneList}
    </div>
  );
};

export default List;
