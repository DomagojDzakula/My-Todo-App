import React from 'react';
//Import components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filterdTodos, inputText }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterdTodos.map(todo => (
                    <Todo inputText={inputText} setTodos={setTodos} todos={todos} key={todo.id} todo={todo} text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;