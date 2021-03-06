import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';


function TodoList() {

    const [todos, setTodos] = useState([]);

    //Function to add a todo
    const addTodo = todo => {
        if(!todo.text || /^\s+$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    }

    //Function to update a todo
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s+$/.test(newValue.text)) {
            return;
        }

        setTodos( prev => prev.map(item => (item.id === todoId ? newValue : item)))

    }

    //Function to remove a todo
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);

    }

    //Function to complete a todo
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>What are your plans for today?</h1>
            <TodoForm 
                onSubmit={addTodo}
            />
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
            
        </div>


    )
}

export default TodoList
