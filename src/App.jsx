import { useState } from 'react'
import { ToDoForm } from './components/ToDoForm';
import {ToDoItem} from './components/ToDoItem';
import './App.css'

export const App = () => { 

    const [todo, setTodo] = useState([]);
    
    const addTodo = (tarea) => {
      setTodo([...todo, {id:Date.now(), tarea }]);
    }

    const deleteTodo = (id) => { 
      setTodo(todo.filter((item) => item.id !== id));
    }

    return (
      <>
        <ToDoForm addTodo={addTodo}/>
        
      <ul>
        {todo.map((toDoItem) => (
          <ToDoItem key={toDoItem.id} deleteTodo={deleteTodo} todo={toDoItem}/>
        ))}
      </ul>
        
      </>
        
    )

}
