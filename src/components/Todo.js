import React, { useState } from 'react';
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

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

  function showPromiseConfirm(categ) {
    confirm({
      title: 'Do you want to delete this item?',
      icon: <ExclamationCircleOutlined />,
      content:
        'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        if (categ === 'Scheduled') {
          const newObj = todosToDo.filter((t) => t !== todo);
          setTodoToDo(newObj);
        }
        if (categ === 'Done') {
          const newObj = todosDone.filter((t) => t !== done);
          setTodoDone(newObj);
        }

        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  }

  const handleClickCheckBox = (e) => {
    setChecked(!checked);
    if (!checked && !todosDone.includes(todo))
      setTodoDone([...todosDone, todo]);
  };

  const handleClickTrash = (e) => {
    showPromiseConfirm(categ);

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
