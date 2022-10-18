import React from 'react';
import './App.css';
import TodoForm from './TodoForm';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function App() {
 
  const Todo = ({ todo, index, completeTodo }) => {
    return (
      <div className='todo' 
      style={{ textDecoration: todo.isCompleted ? "line-through" : " " }}>
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <IconButton aria-label="delete" onClick={()=> removeTodo(index)}>
          <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const [todos, setTodos] = React.useState([
    { text: "Learn about React",isCompleted: false},
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build really cool todo app", isCompleted: false }
  ]);

  return (
    <div className="app">
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}/>
          ))}
          <TodoForm addTodo={addTodo}
       />
    </div>
    </div>
  );
}

export default App;
