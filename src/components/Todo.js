import React, { useState } from 'react';

const Todo = ({
  empty,
  categ,
  todo,
  done,
  todosToDo,
  setTodoToDo,
  todosDone,
  setTodoDone,
}) => {
  const [checked, setChecked] = useState(false);
  const handleClickCheckBox = (e) => {
    setChecked(!checked);
    if (!checked && !todosDone.includes(todo))
      setTodoDone([...todosDone, todo]);
  };

  const handleClickTrash = (e) => {
    if (categ === 'Scheduled') {
      const newObj = todosToDo.filter((t) => t !== todo);
      setTodoToDo(newObj);
    }
    if (categ === 'Done') {
      const newObj = todosDone.filter((t) => t !== done);
      setTodoDone(newObj);
    }
    // e.target.parentNode.remove();
  };
  return (
    <div className={categ === 'Scheduled' ? 'todos' : 'dones'}>
      {empty ? null : categ === 'Scheduled' ? (
        <input type="checkbox" onClick={handleClickCheckBox} />
      ) : null}
      <p className={checked ? 'checked' : null}>
        {categ === 'Scheduled' ? todo : done}
      </p>
      {empty ? null : (
        <i className="fas fa-trash" onClick={handleClickTrash}></i>
      )}
    </div>
  );
};

export default Todo;
