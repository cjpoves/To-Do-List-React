import {useState } from 'react'
import "./ToDoForm.css"



export const ToDoForm = ({addTodo}) => { 
const [tarea, setTarea] = useState('');
const [alerta, setAlerta] = useState('')

function handleSubmit(e) {
    e.preventDefault();
   if (tarea.trim()) {
    addTodo (tarea);
    setTarea('');
   } else {
    setAlerta('Ingrese una tarea')

    setTimeout(() => {
      setAlerta('')
 }, 2000)
}
}

    return (
        <form onSubmit={handleSubmit} className='form' >
            <h1>Lista de tareas</h1>
          <input
          type='text'
          placeholder='Ingrese tarea'
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          />
          <button type= "submit">
            Añadir tarea
          </button>
          {alerta && <p className='alert'>{alerta}</p>}
        </form>
    )
}