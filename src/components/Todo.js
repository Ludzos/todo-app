import React from 'react'
import Zoom from 'react-reveal/Zoom';

const Todo = ({text, todo, todos, setTodos}) => {

    const deteleHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () =>  {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {
                        ...item, 
                        completed: !item.completed,
                    };

                }
                return item;
            })
        );
    };        
        

    return (
        <Zoom>
        <div className="todo">
            <li 
            className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}
            </li>
                <button onClick={completeHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deteleHandler} className="trash-btn"> 
                    <i className="fas fa-trash"></i>
                </button>
        </div>
        </Zoom>
    );
}

export default Todo;