import './todolist.scss'
import Todoitem from '../TodoItem/Todoitem';

export default function Todolist({ setTodos, todos }) {

    if (todos.length === 0) {
        return (<p className='todo_message'>None plans</p>)
    }

    return (
        <ul className='todo_items'>
            {todos.map((elem, index) => <Todoitem key={index} {...elem} setTodos={setTodos} todos={todos} />)}
        </ul>
    )
}