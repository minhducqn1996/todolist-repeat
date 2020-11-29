import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, setState] = useState({
    type: 'Add',
    todoList: [
      { key: 0, name: 'hoc English' },
      { key: 1, name: 'hoc France' },
    ],
  })

  const handleClick = (event, value) => {
    event.preventDefault();
    const keyName = state.todoList.length;
    const data = {
      key: keyName,
      name: value,
    }

    let arr = [...state.todoList, data];
    setState(preState => ({
      ...preState,
      todoList: arr,
    }))
  }

  const handleDelete = (keyValue) => {
    console.log('delete', keyValue);
    let arr = state.todoList;
    arr.splice(keyValue, 1);
    setState(preState => ({
      ...preState,
      todoList: arr,
    }))
  }

  const handleEdit = (keyform, nameValue) => {
    
  }

  const { keyform, nameValue } = handleEdit;
  console.log(keyform, nameValue);
  return (
    <div className="App">
      <TodoForm
        // handleChangeForm={handlechange}
        typeForm={state.type}
        onClickForm={handleClick}
      // keyform={handleEdit}
      />

      <TodoList
        todoListForm={state.todoList}
        handleDeleteForm={handleDelete}
        handleEditForm={handleEdit}
      />

    </div>
  );
}

export default App;
