import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
        <div className="App">
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            className="input"
            value={value}
            onChange={e => setValue(e.target.value)}
            required
          />
        <Button  onClick={handleSubmit} variant="contained" color="success">Add Task</Button>
        </form>
        </div>
    );
  }
  export default TodoForm;