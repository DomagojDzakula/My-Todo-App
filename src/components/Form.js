import React from 'react';
const Form = ({ setInputText, setTodos, todos, inputText, setStatus, lightMode, setLightMode }) => {
    //Javascript code and functions

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText === '') {
        } else {
            setTodos([
                ...todos, { text: inputText, completed: false, id: Math.random() * 1000 },
            ]);
        }
        setInputText('');

    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            <div className='toggle-container' >
                <h1 className='mode'>{lightMode ? 'Light Mode' : 'Dark Mode'}</h1>
                <input defaultChecked={lightMode} onClick={() => setLightMode(prevMode => !prevMode)} type="checkbox" id="switch" /><label for="switch">Toggle</label>
            </div>
        </form>
    );
};

export default Form;
