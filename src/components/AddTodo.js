import React from 'react';

const AddTodo = ({ userInput, setUserInput, todosToDo, setTodoToDo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput) {
      const newObj = [...todosToDo];
      newObj.push(userInput);
      setTodoToDo(newObj);
      setUserInput('');
    }
  };
  return (
    <form className="addTodo" onSubmit={handleSubmit}>
      <input
        placeholder="Add a todo here"
        value={userInput}
        type="text"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default AddTodo;
