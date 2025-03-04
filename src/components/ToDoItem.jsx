

export const ToDoItem = ({todo, deleteTodo}) => {

return (
    <>
    <li>
        {todo.tarea}
        <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
    </li>
    </>
)

}