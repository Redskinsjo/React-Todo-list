import React from 'react';
import { Tabs } from 'antd';
import List from './List';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Main = ({ todosToDo, todosDone, setTodosToDo, setTodosDone }) => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Scheduled" key="1">
      <List
        categ="Scheduled"
        todosToDo={todosToDo}
        todosDone={todosDone}
        setTodoToDo={setTodosToDo}
        setTodoDone={setTodosDone}
      />
    </TabPane>
    <TabPane tab="Done" key="2">
      <List
        categ="Done"
        todosToDo={todosToDo}
        todosDone={todosDone}
        setTodoDone={setTodosDone}
      />
    </TabPane>
  </Tabs>
);

export default Main;
