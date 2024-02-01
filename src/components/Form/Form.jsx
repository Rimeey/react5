import './form.scss';

export default function Form({ setTodos, todos }) {

    const handlerAddTodo = (e) => {

        if (e.key === 'Enter' && e.target.value !== '') {
            setTodos([...todos, { title: e.target.value, status: false }]);
            e.target.value = '';
        }
    }

    return (
        <div className='form'>
            <input type="text" placeholder='What plans to do?' onKeyUp={(e) => handlerAddTodo(e)} />
        </div>
    )
}