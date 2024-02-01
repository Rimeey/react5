import './todoitem.scss';
import { MdOutlineRadioButtonUnchecked as Unchecked, MdOutlineCheckCircleOutline as Checked, MdDeleteOutline as Delete } from "react-icons/md";

export default function Todoitem({ title, status, setTodos, todos }) {

    const isCheck = (status) => {
        if (status) {
            return <Checked className='todo_icon todo_icon--check' onClick={handlerChecked} />
        } else {
            return <Unchecked className='todo_icon todo_icon--check' onClick={handlerChecked} />
        }
    }

    const handlerChecked = () => {
        let tmp = todos.map((elem) => {
            if (elem.title === title) {
                return { title: elem.title, status: !elem.status }
            } else {
                return { ...elem }
            }
        });
        setTodos(tmp);
    }

    const handlerDelete = () => {
        setTodos(todos.filter(elem => elem.title !== title));
    }

    return (
        <li className='todo_item'>
            {isCheck(status)}
            <span onClick={() => handlerChecked()}>{title}</span>
            <Delete className='todo_icon todo_icon--delete' onClick={() => handlerDelete()} />
        </li>
    )
}